"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ua_util_1 = require("../../utils/ua.util");
const smtp_service_1 = require("../smtp/smtp.service");
const article_service_1 = require("../article/article.service");
const setting_service_1 = require("../setting/setting.service");
const user_service_1 = require("../user/user.service");
const markdown_util_1 = require("../../utils/markdown.util");
const comment_entity_1 = require("./comment.entity");
const html_1 = require("./html");
const url = require('url');
let CommentService = class CommentService {
    constructor(commentRepository, articleService, smtpService, settingService, userService) {
        this.commentRepository = commentRepository;
        this.articleService = articleService;
        this.smtpService = smtpService;
        this.settingService = settingService;
        this.userService = userService;
    }
    async create(userAgent, comment) {
        const { hostId, name, email, content, createByAdmin = false } = comment;
        if (!hostId || !name || !email || !content) {
            throw new common_1.HttpException('缺失参数', common_1.HttpStatus.BAD_REQUEST);
        }
        comment.pass = false;
        const { text: uaText } = ua_util_1.parseUserAgent(userAgent);
        comment.userAgent = uaText;
        comment.html = markdown_util_1.marked(content).html;
        const newComment = await this.commentRepository.create(comment);
        await this.commentRepository.save(comment);
        if (!createByAdmin) {
            const setting = await this.settingService.findAll(true);
            const sendEmail = (adminName, adminEmail) => {
                const emailMessage = {
                    from: setting.smtpFromUser,
                    to: adminEmail,
                    subject: '新评论通知',
                    html: html_1.getNewCommentHTML(Object.assign(Object.assign({}, setting), { adminName, comment })),
                };
                this.smtpService.create(emailMessage).catch(() => {
                    console.log('收到新评论，但发送邮件通知失败');
                });
            };
            try {
                const [users] = await this.userService.findAll({ role: 'admin' });
                users.forEach((user) => {
                    if (user.email) {
                        sendEmail(user.name, user.email);
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
        return newComment;
    }
    async findAll(queryParams) {
        const query = this.commentRepository
            .createQueryBuilder('comment')
            .orderBy('comment.createAt', 'DESC');
        if (typeof queryParams === 'object') {
            const { page = 1, pageSize = 12, pass } = queryParams, otherParams = __rest(queryParams, ["page", "pageSize", "pass"]);
            query.skip((+page - 1) * +pageSize);
            query.take(+pageSize);
            if (pass) {
                query.andWhere('comment.pass=:pass').setParameter('pass', pass);
            }
            if (otherParams) {
                Object.keys(otherParams).forEach((key) => {
                    query
                        .andWhere(`comment.${key} LIKE :${key}`)
                        .setParameter(`${key}`, `%${otherParams[key]}%`);
                });
            }
        }
        return query.getManyAndCount();
    }
    async findById(id) {
        return this.commentRepository.findOne(id);
    }
    async getArticleComments(hostId, queryParams) {
        const query = this.commentRepository
            .createQueryBuilder('comment')
            .where('comment.hostId=:hostId')
            .andWhere('comment.pass=:pass')
            .andWhere('comment.parentCommentId is NULL')
            .orderBy('comment.createAt', 'DESC')
            .setParameter('hostId', hostId)
            .setParameter('pass', true);
        const subQuery = this.commentRepository
            .createQueryBuilder('comment')
            .andWhere('comment.pass=:pass')
            .andWhere('comment.parentCommentId=:parentCommentId')
            .orderBy('comment.createAt', 'ASC')
            .setParameter('pass', true);
        const { page = 1, pageSize = 12 } = queryParams;
        query.skip((+page - 1) * +pageSize);
        query.take(+pageSize);
        const [data, count] = await query.getManyAndCount();
        for (const item of data) {
            const subComments = await subQuery.setParameter('parentCommentId', item.id).getMany();
            Object.assign(item, { children: subComments });
        }
        return [data, count];
    }
    async findByIds(ids) {
        return this.commentRepository.findByIds(ids);
    }
    async updateById(id, data) {
        const old = await this.commentRepository.findOne(id);
        const newData = await this.commentRepository.merge(old, data);
        if (newData.pass) {
            const { replyUserName, replyUserEmail, hostId, url: link } = newData;
            const isReply = replyUserName && replyUserEmail;
            if (isReply) {
                try {
                    const setting = await this.settingService.findAll(true);
                    const emailMessage = {
                        from: setting.smtpFromUser,
                        to: replyUserEmail,
                        subject: '评论回复通知',
                        html: html_1.getReplyCommentHTML(Object.assign(Object.assign({}, setting), { replyUserName, commentHostUrl: url.resolve(setting.systemUrl, link) })),
                    };
                    this.smtpService.create(emailMessage).catch(() => {
                        console.log(`通知用户 ${replyUserName}（${replyUserEmail}），但发送邮件通知失败`);
                    });
                }
                catch (e) { }
            }
        }
        return this.commentRepository.save(newData);
    }
    async deleteById(id) {
        const data = await this.commentRepository.findOne(id);
        return this.commentRepository.remove(data);
    }
};
CommentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        article_service_1.ArticleService,
        smtp_service_1.SMTPService,
        setting_service_1.SettingService,
        user_service_1.UserService])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map