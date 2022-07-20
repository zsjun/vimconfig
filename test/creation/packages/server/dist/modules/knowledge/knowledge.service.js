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
exports.KnowledgeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const date_util_1 = require("../../utils/date.util");
const knowledge_entity_1 = require("./knowledge.entity");
let KnowledgeService = class KnowledgeService {
    constructor(repository) {
        this.repository = repository;
    }
    async createKnowledgeBook(knowledge) {
        const { title, status, parentId } = knowledge;
        const exist = await this.repository.findOne({ where: { title } });
        if (exist && !parentId) {
            throw new common_1.HttpException('知识库已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        if (status === 'publish') {
            Object.assign(knowledge, { publishAt: date_util_1.dateFormat() });
        }
        const data = await this.repository.create(knowledge);
        await this.repository.save(data);
        return data;
    }
    async createKnowledgeChapter(knowledges) {
        if (!Array.isArray(knowledges)) {
            knowledges = [knowledges];
        }
        if (knowledges.some((knowledge) => !knowledge.parentId)) {
            throw new common_1.HttpException('无效的知识库章节', common_1.HttpStatus.BAD_REQUEST);
        }
        const result = [];
        for (const knowledge of knowledges) {
            result.push(await this.createKnowledgeBook(knowledge));
        }
        return result;
    }
    async deleteById(id) {
        const data = await this.repository.findOne(id);
        if (!data.parentId) {
            const query = this.repository
                .createQueryBuilder('knowledge')
                .where('knowledge.parentId=:parentId')
                .setParameter('parentId', data.id);
            const children = await query.getMany();
            if (children.length) {
                for (const item of children) {
                    await this.repository.remove(item);
                }
            }
        }
        return this.repository.remove(data);
    }
    async updateById(id, data) {
        const oldData = await this.repository.findOne(id);
        const { status } = oldData;
        const newData = Object.assign(Object.assign({}, data), { views: oldData.views, publishAt: oldData.status === 'draft' && status === 'publish' ? date_util_1.dateFormat() : oldData.publishAt });
        const result = await this.repository.merge(oldData, newData);
        await this.repository.save(result);
        return result;
    }
    async updateViewsById(id) {
        const oldData = await this.repository.findOne(id);
        const newData = await this.repository.merge(oldData, {
            views: oldData.views + 1,
        });
        return this.repository.save(newData);
    }
    async updateLikesById(id, type) {
        const oldData = await this.repository.findOne(id);
        const newData = await this.repository.merge(oldData, {
            likes: type === 'like' ? oldData.likes + 1 : oldData.likes - 1,
        });
        return this.repository.save(newData);
    }
    async findAll(queryParams) {
        const query = this.repository
            .createQueryBuilder('knowledge')
            .orderBy('knowledge.publishAt', 'DESC')
            .where('knowledge.parentId is :parentId')
            .setParameter('parentId', null);
        const { page = 1, pageSize = 12, status } = queryParams, otherParams = __rest(queryParams, ["page", "pageSize", "status"]);
        query.skip((+page - 1) * +pageSize);
        query.take(+pageSize);
        if (status) {
            query.andWhere('knowledge.status=:status').setParameter('status', status);
        }
        if (otherParams) {
            Object.keys(otherParams).forEach((key) => {
                query
                    .andWhere(`knowledge.${key} LIKE :${key}`)
                    .setParameter(`${key}`, `%${otherParams[key]}%`);
            });
        }
        const [data, total] = await query.getManyAndCount();
        return [data, total];
    }
    async findById(id) {
        const data = (await this.repository.findOne(id));
        if (!data) {
            return null;
        }
        if (!data.parentId) {
            const query = this.repository
                .createQueryBuilder('knowledge')
                .where('knowledge.parentId=:parentId')
                .setParameter('parentId', data.id);
            const children = await query.getMany();
            children.sort((a, b) => a.order - b.order);
            Object.assign(data, { children: children || [] });
        }
        return data;
    }
};
KnowledgeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(knowledge_entity_1.Knowledge)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KnowledgeService);
exports.KnowledgeService = KnowledgeService;
//# sourceMappingURL=knowledge.service.js.map