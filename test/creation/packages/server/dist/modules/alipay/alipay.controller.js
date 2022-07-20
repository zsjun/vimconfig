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
exports.AlipayController = void 0;
const common_1 = require("@nestjs/common");
const alipay_sdk_1 = require("alipay-sdk");
const form_1 = require("alipay-sdk/lib/form");
const article_service_1 = require("../article/article.service");
const alipaySdk = new alipay_sdk_1.default({
    appId: '2016100200643701',
    privateKey: 'MIIEowIBAAKCAQEAuGnGSrzCvtoP0/Cpv6gjUvnXrmWyGqkSVczAr/XMGRjswktZfXrWcFddwWSXoTSr6S2rYw/l5GmZETukvSztjQY7dWBSaKwhhTRymUaB9Dj0f4OX493/kiRhWLmPlf2vRzjGnfBdd9K4VhGzTTkXGT5x9aKZduHdI6kmKWCaEY46jpXf513eUjwO+UhltVr9o4ut/NeqeTGTn9/4jNY/YriXDA4FamXrscnwHN6rIDD95rk//4ZrtAghT39Rfvf8sNZLldGH7SQLrpCyCAO0dYKEA1cu2rHfvhawXFzCDQenCgWDMaNgbIgII8Z5UnwHjuPg2Jv+smnC2OJ5yIvTrwIDAQABAoIBAQCCdbnlB3KSB7woyFmeD3ml6r/tTV5ZRACHmEk8chvIKXzc2uddQLhRU00tUld+oL95P2i+tPGCzD2QFmyttAn9uUn4+IJ0MEmqbXcg/eNTfbNiPhsHBfcWUQxY8zUj/AqyzPSdqPzGltj3cqAw4lF391gxWK1Oj+ycnL41iXSVM56hVJ1lt+IJjyLn5yP5b3kYbGgBjn8tImjN2aOimEsMr3GPd1XDlNQH7XBCwNzM9Y8+0xciFIc+BNGTO3dw4TfaYoYHbz4MUwybTkWLVrOHJA2SQYVz5HgQ7kTrFOQH409p9+3JcG6c1vFs5ppZYFF4/f48q3P8Ev8D8YhxpvGhAoGBAPSESBS/DrdCDV7InYaSTLb5Zur7dlEuWzQ0Iv7wEGNHylhrH5SqaFS1qbUTm8Gp2Tn6343sz3GfkGDrX8JAU2w3GKoefjbJMWrNAXf15RVIIVFN9yRFD5zs688FISO1sDPYywqgj/DywXeVIF5JwHD7NDnKZrU+g7Qdi2jDK6o/AoGBAMES5Oq+tMkLMgPl5KJcz0g9JirZ5dHuZt52HzgPlyHPgJPxrjYdt5xQicgE7oWIVJKa+RYdAku8jUQe5e/+N9mlIh3pxWWgzBDO8lorlYaOn6kXQcBPgma+g3b98BqYkSCdVEqhTu+4S021IQhX7RAeHHdiLAdu24WRp3h0+hqRAoGAN4oMbVnwV8PTEaJz1WtJrY38yIcRmuLyqGrnQAz7S/G0jlzWsYf7ZrJUt+KaUGTqCHdpa+1MOTzLKJiOCatex4fEPG/srzkH1oB2Qu9Bd5IIr1UMO9rL7xMJhN5fZqMQQNaPV/ycdVhOhYED9ya9ZWxJso68wZJPjAvh7IvYUTUCgYAtlLhWcw9bJzl3kh6X9jE5bLZGB4sqNI40ls5n/cZARSylwLjQLdPbI2hjwEZPYBAXTF7hyZdxKeJv4puGPQ4SY9naFgZ0J7IFhdXRU9jJG4K1+LedHyg5+WAwB2NX5AzfFkWAGPT5wxiED+7seVWOKI2v4Y1jc9h/gBN5bKRfAQKBgG62gofCXoBXUWrBQ+wLuFo4+AeCnJAlN9hn89m9DtavSBJV+OGP9luol40ZnFRvlMEIU1plbaSRtmxuwpfgw4/LJKh3s4GV5ix87KT2ZmNsRbwxxGeCMnDhhP/pISiWErPD0sOReMSWyr41v7rohWmd83/FxUWU/WOPgxlo7bWo',
    encryptKey: 'uqKvuBYoDnrlbX0KQFZqqg==',
    gateway: 'https://openapi.alipaydev.com/gateway.do',
});
let AlipayController = class AlipayController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async create(body) {
        console.log('body...', body);
        const formData = new form_1.default();
        const { id, totalAmount = '0.01', subject = '文章付费', notifyUrl = 'https://creationapi.shbwyz.com/api/alipay/notify', } = body;
        formData.setMethod('get');
        formData.addField('app_id', '2016100200643701');
        formData.addField('appID', '2016100200643701');
        formData.addField('notifyUrl', notifyUrl);
        formData.addField('bizContent', {
            orderId: id,
            outTradeNo: id.replace(/-/gi, '_'),
            productCode: 'FAST_INSTANT_TRADE_PAY',
            totalAmount,
            subject,
            body: body.body,
        });
        const result = await alipaySdk.exec('alipay.trade.page.pay', {}, { formData: formData });
        console.log('result...', result);
        return result;
    }
    async notify(body) {
        if (body.notify_time && body.trade_status === 'TRADE_SUCCESS') {
            this.articleService.updatePay(body.out_trade_no);
        }
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlipayController.prototype, "create", null);
__decorate([
    common_1.Post('/notify'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlipayController.prototype, "notify", null);
AlipayController = __decorate([
    common_1.Controller('alipay'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], AlipayController);
exports.AlipayController = AlipayController;
//# sourceMappingURL=alipay.controller.js.map