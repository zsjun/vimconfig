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
exports.ViewController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ip_util_1 = require("../../utils/ip.util");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const view_service_1 = require("./view.service");
const view_entity_1 = require("./view.entity");
let ViewController = class ViewController {
    constructor(viewService) {
        this.viewService = viewService;
    }
    create(req, data) {
        const userAgent = req.headers['user-agent'];
        const url = data.url;
        return this.viewService.create(ip_util_1.getClientIP(req), userAgent, url);
    }
    findAll(queryParam) {
        return this.viewService.findAll(queryParam);
    }
    findByUrl(url) {
        return this.viewService.findByUrl(url);
    }
    findById(id) {
        return this.viewService.findById(id);
    }
    deleteById(id) {
        return this.viewService.deleteById(id);
    }
};
__decorate([
    swagger_1.ApiResponse({ status: 200, description: '访问记录添加成功', type: [view_entity_1.View] }),
    common_1.Post(),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ViewController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ViewController.prototype, "findAll", null);
__decorate([
    common_1.Get('/url'),
    __param(0, common_1.Query('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ViewController.prototype, "findByUrl", null);
__decorate([
    common_1.Get(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ViewController.prototype, "findById", null);
__decorate([
    common_1.Delete(':id'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ViewController.prototype, "deleteById", null);
ViewController = __decorate([
    swagger_1.ApiTags('View'),
    common_1.Controller('view'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [view_service_1.ViewService])
], ViewController);
exports.ViewController = ViewController;
//# sourceMappingURL=view.controller.js.map