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
exports.TagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const tag_service_1 = require("./tag.service");
const tag_entity_1 = require("./tag.entity");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    create(tag) {
        return this.tagService.create(tag);
    }
    findAll(queryParams) {
        return this.tagService.findAll(queryParams);
    }
    findById(id) {
        return this.tagService.findById(id);
    }
    getArticleById(id, status) {
        return this.tagService.getArticleById(id, status);
    }
    updateById(id, tag) {
        return this.tagService.updateById(id, tag);
    }
    deleteById(id) {
        return this.tagService.deleteById(id);
    }
};
__decorate([
    swagger_1.ApiResponse({ status: 200, description: '创建标签', type: [tag_entity_1.Tag] }),
    common_1.Post(),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "findById", null);
__decorate([
    common_1.Get(':id/article'),
    __param(0, common_1.Param('id')), __param(1, common_1.Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "getArticleById", null);
__decorate([
    common_1.Patch(':id'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "updateById", null);
__decorate([
    common_1.Delete(':id'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "deleteById", null);
TagController = __decorate([
    swagger_1.ApiTags('Tag'),
    common_1.Controller('tag'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map