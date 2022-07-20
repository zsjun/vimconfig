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
exports.PosterService = void 0;
const path = require("path");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const date_util_1 = require("../../utils/date.util");
const puppeteer_util_1 = require("../../utils/puppeteer.util");
const oss_util_1 = require("../../utils/oss.util");
const setting_service_1 = require("../setting/setting.service");
const poster_entity_1 = require("./poster.entity");
let PosterService = class PosterService {
    constructor(repository, settingService) {
        this.repository = repository;
        this.settingService = settingService;
        this.oss = new oss_util_1.Oss(this.settingService);
    }
    async createPoster({ pageUrl, name, width, height, html, }) {
        const ret = await this.repository.findOne({ name });
        if (ret) {
            return { url: ret.imgUrl, name: ret.name };
        }
        const uploadPath = path.join('poster', date_util_1.dateFormat(new Date(), 'yyyy-MM-dd'), `${pageUrl}/${name}.png`);
        const { size, buffer } = await puppeteer_util_1.createImage({ width, height, html, ratio: 2 });
        const url = await this.oss.putFile(uploadPath, buffer);
        const data = await this.repository.create({
            name,
            size,
            pageUrl,
            imgUrl: url,
        });
        await this.repository.save(data);
        return { url: data.imgUrl, name: data.name };
    }
    async findAll(queryParams) {
        const query = this.repository.createQueryBuilder('poster').orderBy('poster.createAt', 'DESC');
        if (typeof queryParams === 'object') {
            const { page = 1, pageSize = 12 } = queryParams, otherParams = __rest(queryParams, ["page", "pageSize"]);
            query.skip((+page - 1) * +pageSize);
            query.take(+pageSize);
            if (otherParams) {
                Object.keys(otherParams).forEach((key) => {
                    query
                        .andWhere(`poster.${key} LIKE :${key}`)
                        .setParameter(`${key}`, `%${otherParams[key]}%`);
                });
            }
        }
        return query.getManyAndCount();
    }
    async deleteById(id) {
        const target = await this.repository.findOne(id);
        await this.oss.deleteFile(target.imgUrl);
        return this.repository.remove(target);
    }
};
PosterService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(poster_entity_1.Poster)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        setting_service_1.SettingService])
], PosterService);
exports.PosterService = PosterService;
//# sourceMappingURL=poster.service.js.map