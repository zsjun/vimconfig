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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tag_entity_1 = require("./tag.entity");
let TagService = class TagService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async create(tag) {
        const { label } = tag;
        const existTag = await this.tagRepository.findOne({ where: { label } });
        if (existTag) {
            throw new common_1.HttpException('标签已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const newTag = await this.tagRepository.create(tag);
        await this.tagRepository.save(newTag);
        return newTag;
    }
    async findAll(queryParams) {
        const { articleStatus } = queryParams;
        const qb = this.tagRepository.createQueryBuilder('tag').orderBy('tag.createAt', 'ASC');
        if (articleStatus) {
            qb.leftJoinAndSelect('tag.articles', 'articles', 'articles.status=:status', {
                status: articleStatus,
            });
        }
        else {
            qb.leftJoinAndSelect('tag.articles', 'articles');
        }
        const data = await qb.getMany();
        data.forEach((d) => {
            Object.assign(d, { articleCount: d.articles.length });
            delete d.articles;
        });
        return data;
    }
    async findById(id) {
        const data = await this.tagRepository
            .createQueryBuilder('tag')
            .where('tag.id=:id')
            .orWhere('tag.label=:id')
            .orWhere('tag.value=:id')
            .setParameter('id', id)
            .getOne();
        return data;
    }
    async getArticleById(id, status = null) {
        const data = await this.tagRepository
            .createQueryBuilder('tag')
            .leftJoinAndSelect('tag.articles', 'articles')
            .orderBy('articles.updateAt', 'DESC')
            .where('tag.id=:id')
            .orWhere('tag.label=:id')
            .orWhere('tag.value=:id')
            .setParameter('id', id)
            .getOne();
        if (status) {
            data.articles = data.articles.filter((a) => a.status === status);
            return data;
        }
        return data;
    }
    async findByIds(ids) {
        return this.tagRepository.findByIds(ids);
    }
    async updateById(id, tag) {
        const oldTag = await this.tagRepository.findOne(id);
        const updatedTag = await this.tagRepository.merge(oldTag, tag);
        return this.tagRepository.save(updatedTag);
    }
    async deleteById(id) {
        try {
            const tag = await this.tagRepository.findOne(id);
            await this.tagRepository.remove(tag);
            return true;
        }
        catch (e) {
            throw new common_1.HttpException('删除失败，可能存在关联文章', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
TagService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map