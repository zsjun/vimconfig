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
exports.PosterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const poster_service_1 = require("./poster.service");
const poster_entity_1 = require("./poster.entity");
let PosterController = class PosterController {
    constructor(service) {
        this.service = service;
    }
    uploadFile(data) {
        return this.service.createPoster(data);
    }
    findAll(queryParam) {
        return this.service.findAll(queryParam);
    }
    deleteById(id) {
        return this.service.deleteById(id);
    }
};
__decorate([
    swagger_1.ApiResponse({ status: 200, description: '生成海报', type: [poster_entity_1.Poster] }),
    common_1.Post(''),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PosterController.prototype, "uploadFile", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PosterController.prototype, "findAll", null);
__decorate([
    common_1.Delete(':id'),
    roles_guard_1.Roles('admin'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PosterController.prototype, "deleteById", null);
PosterController = __decorate([
    swagger_1.ApiTags('Poster'),
    common_1.Controller('poster'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [poster_service_1.PosterService])
], PosterController);
exports.PosterController = PosterController;
//# sourceMappingURL=poster.controller.js.map