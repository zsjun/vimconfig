"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./modules/auth/auth.module");
const alipay_module_1 = require("./modules/alipay/alipay.module");
const user_module_1 = require("./modules/user/user.module");
const user_entity_1 = require("./modules/user/user.entity");
const file_module_1 = require("./modules/file/file.module");
const file_entity_1 = require("./modules/file/file.entity");
const knowledge_module_1 = require("./modules/knowledge/knowledge.module");
const knowledge_entity_1 = require("./modules/knowledge/knowledge.entity");
const article_module_1 = require("./modules/article/article.module");
const article_entity_1 = require("./modules/article/article.entity");
const category_module_1 = require("./modules/category/category.module");
const category_entity_1 = require("./modules/category/category.entity");
const tag_module_1 = require("./modules/tag/tag.module");
const tag_entity_1 = require("./modules/tag/tag.entity");
const comment_module_1 = require("./modules/comment/comment.module");
const comment_entity_1 = require("./modules/comment/comment.entity");
const setting_module_1 = require("./modules/setting/setting.module");
const setting_entity_1 = require("./modules/setting/setting.entity");
const smtp_module_1 = require("./modules/smtp/smtp.module");
const smtp_entity_1 = require("./modules/smtp/smtp.entity");
const page_module_1 = require("./modules/page/page.module");
const page_entity_1 = require("./modules/page/page.entity");
const view_module_1 = require("./modules/view/view.module");
const view_entity_1 = require("./modules/view/view.entity");
const search_entity_1 = require("./modules/search/search.entity");
const search_module_1 = require("./modules/search/search.module");
const poster_entity_1 = require("./modules/poster/poster.entity");
const poster_module_1 = require("./modules/poster/poster.module");
const { file: envFilePath } = require('../../../config/env');
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: [envFilePath] }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: 'mysql',
                    entities: [
                        user_entity_1.User,
                        file_entity_1.File,
                        knowledge_entity_1.Knowledge,
                        article_entity_1.Article,
                        category_entity_1.Category,
                        tag_entity_1.Tag,
                        comment_entity_1.Comment,
                        setting_entity_1.Setting,
                        smtp_entity_1.SMTP,
                        page_entity_1.Page,
                        view_entity_1.View,
                        search_entity_1.Search,
                        poster_entity_1.Poster,
                    ],
                    host: configService.get('DB_HOST', '0.0.0.0'),
                    port: configService.get('DB_PORT', 3306),
                    username: configService.get('DB_USER', 'root'),
                    password: configService.get('DB_PASSWD', 'root'),
                    database: configService.get('DB_DATABASE', 'wipi'),
                    charset: 'utf8mb4',
                    timezone: '+08:00',
                    synchronize: true,
                }),
            }),
            user_module_1.UserModule,
            alipay_module_1.AlipayModule,
            file_module_1.FileModule,
            tag_module_1.TagModule,
            article_module_1.ArticleModule,
            knowledge_module_1.KnowledgeModule,
            category_module_1.CategoryModule,
            comment_module_1.CommentModule,
            setting_module_1.SettingModule,
            smtp_module_1.SMTPModule,
            auth_module_1.AuthModule,
            page_module_1.PageModule,
            view_module_1.ViewModule,
            search_module_1.SearchModule,
            poster_module_1.PosterModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map