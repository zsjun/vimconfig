"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlipayModule = void 0;
const common_1 = require("@nestjs/common");
const article_module_1 = require("../article/article.module");
const alipay_controller_1 = require("./alipay.controller");
const tag_module_1 = require("../tag/tag.module");
const category_module_1 = require("../category/category.module");
let AlipayModule = class AlipayModule {
};
AlipayModule = __decorate([
    common_1.Module({
        imports: [category_module_1.CategoryModule, tag_module_1.TagModule, article_module_1.ArticleModule],
        controllers: [alipay_controller_1.AlipayController],
    })
], AlipayModule);
exports.AlipayModule = AlipayModule;
//# sourceMappingURL=alipay.module.js.map