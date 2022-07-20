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
exports.KnowledgeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const knowledge_service_1 = require("./knowledge.service");
const knowledge_entity_1 = require("./knowledge.entity");
let KnowledgeController = class KnowledgeController {
    constructor(service) {
        this.service = service;
    }
    createBook(data) {
        return this.service.createKnowledgeBook(data);
    }
    createChapter(data) {
        return this.service.createKnowledgeChapter(data);
    }
    deleteById(id) {
        return this.service.deleteById(id);
    }
    updateById(id, data) {
        return this.service.updateById(id, data);
    }
    findAll(queryParams) {
        return this.service.findAll(queryParams);
    }
    async findById(id) {
        return this.service.findById(id);
    }
    updateViewsById(id) {
        return this.service.updateViewsById(id);
    }
    updateLikesById(id, type) {
        return this.service.updateLikesById(id, type);
    }
};
__decorate([
    swagger_1.ApiResponse({ status: 200, description: '创建知识库', type: [knowledge_entity_1.Knowledge] }),
    common_1.Post('/book'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KnowledgeController.prototype, "createBook", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, description: '创建知识章节', type: [knowledge_entity_1.Knowledge] }),
    common_1.Post('/chapter'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KnowledgeController.prototype, "createChapter", null);
__decorate([
    common_1.Delete(':id'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KnowledgeController.prototype, "deleteById", null);
__decorate([
    common_1.Patch(':id'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeController.prototype, "updateById", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KnowledgeController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KnowledgeController.prototype, "findById", null);
__decorate([
    common_1.Post(':id/views'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KnowledgeController.prototype, "updateViewsById", null);
__decorate([
    common_1.Post(':id/likes'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Param('id')), __param(1, common_1.Body('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeController.prototype, "updateLikesById", null);
KnowledgeController = __decorate([
    swagger_1.ApiTags('Knowledge'),
    common_1.Controller('Knowledge'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [knowledge_service_1.KnowledgeService])
], KnowledgeController);
exports.KnowledgeController = KnowledgeController;
//# sourceMappingURL=knowledge.controller.js.map