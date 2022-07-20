"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const article_module_1 = require("../article/article.module");
const setting_module_1 = require("../setting/setting.module");
const smtp_module_1 = require("../smtp/smtp.module");
const user_module_1 = require("../user/user.module");
const comment_service_1 = require("./comment.service");
const comment_controller_1 = require("./comment.controller");
const comment_entity_1 = require("./comment.entity");
let CommentModule = class CommentModule {
};
CommentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([comment_entity_1.Comment]),
            auth_module_1.AuthModule,
            article_module_1.ArticleModule,
            setting_module_1.SettingModule,
            smtp_module_1.SMTPModule,
            user_module_1.UserModule,
        ],
        providers: [comment_service_1.CommentService],
        controllers: [comment_controller_1.CommentController],
    })
], CommentModule);
exports.CommentModule = CommentModule;
//# sourceMappingURL=comment.module.js.map