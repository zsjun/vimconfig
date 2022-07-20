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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knowledge = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Knowledge = class Knowledge {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Knowledge.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ default: null }),
    __metadata("design:type", String)
], Knowledge.prototype, "parentId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Knowledge.prototype, "order", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Knowledge.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ default: null }),
    __metadata("design:type", String)
], Knowledge.prototype, "cover", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'text', default: null }),
    __metadata("design:type", String)
], Knowledge.prototype, "summary", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'mediumtext', default: null, charset: 'utf8mb4' }),
    __metadata("design:type", String)
], Knowledge.prototype, "content", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'mediumtext', default: null, charset: 'utf8mb4' }),
    __metadata("design:type", String)
], Knowledge.prototype, "html", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'mediumtext', default: null }),
    __metadata("design:type", String)
], Knowledge.prototype, "toc", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('simple-enum', { enum: ['draft', 'publish'], default: 'draft' }),
    __metadata("design:type", String)
], Knowledge.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Knowledge.prototype, "views", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Knowledge.prototype, "likes", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Knowledge.prototype, "isCommentable", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Knowledge.prototype, "publishAt", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], Knowledge.prototype, "createAt", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.UpdateDateColumn({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], Knowledge.prototype, "updateAt", void 0);
Knowledge = __decorate([
    typeorm_1.Entity()
], Knowledge);
exports.Knowledge = Knowledge;
//# sourceMappingURL=knowledge.entity.js.map