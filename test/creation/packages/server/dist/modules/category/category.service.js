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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./category.entity");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(Category) {
        const { label } = Category;
        const existCategory = await this.categoryRepository.findOne({
            where: { label },
        });
        if (existCategory) {
            throw new common_1.HttpException('分类已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const newCategory = await this.categoryRepository.create(Category);
        await this.categoryRepository.save(newCategory);
        return newCategory;
    }
    async findAll(queryParams) {
        const { articleStatus } = queryParams;
        const qb = this.categoryRepository
            .createQueryBuilder('category')
            .orderBy('category.createAt', 'ASC');
        if (articleStatus) {
            qb.leftJoinAndSelect('category.articles', 'articles', 'articles.status=:status', {
                status: articleStatus,
            });
        }
        else {
            qb.leftJoinAndSelect('category.articles', 'articles');
        }
        const data = await qb.getMany();
        data.forEach((d) => {
            Object.assign(d, { articleCount: d.articles.length });
            delete d.articles;
        });
        return data;
    }
    async findById(id) {
        const data = await this.categoryRepository
            .createQueryBuilder('category')
            .where('category.id=:id')
            .orWhere('category.label=:id')
            .orWhere('category.value=:id')
            .setParameter('id', id)
            .getOne();
        return data;
    }
    async findByIds(ids) {
        return this.categoryRepository.findByIds(ids);
    }
    async updateById(id, category) {
        const oldCategory = await this.categoryRepository.findOne(id);
        const updatedCategory = await this.categoryRepository.merge(oldCategory, category);
        return this.categoryRepository.save(updatedCategory);
    }
    async deleteById(id) {
        try {
            const category = await this.categoryRepository.findOne(id);
            await this.categoryRepository.remove(category);
            return true;
        }
        catch (e) {
            throw new common_1.HttpException('删除失败，可能存在关联文章', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map