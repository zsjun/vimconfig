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
exports.PageController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const page_entity_1 = require("./page.entity");
const page_service_1 = require("./page.service");
let PageController = class PageController {
    constructor(pageService) {
        this.pageService = pageService;
    }
    create(page) {
        return this.pageService.create(page);
    }
    findAll(queryParams) {
        return this.pageService.findAll(queryParams);
    }
    findById(id) {
        return this.pageService.findById(id);
    }
    updateById(id, page) {
        return this.pageService.updateById(id, page);
    }
    updateViewsById(id) {
        return this.pageService.updateViewsById(id);
    }
    deleteById(id) {
        return this.pageService.deleteById(id);
    }
};
__decorate([
    swagger_1.ApiResponse({ status: 200, description: '创建页面', type: [page_entity_1.Page] }),
    common_1.Post(),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "findById", null);
__decorate([
    common_1.Patch(':id'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "updateById", null);
__decorate([
    common_1.Post(':id/views'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "updateViewsById", null);
__decorate([
    common_1.Delete(':id'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "deleteById", null);
PageController = __decorate([
    swagger_1.ApiTags('Page'),
    common_1.Controller('page'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [page_service_1.PageService])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map