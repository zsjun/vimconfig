"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oss = void 0;
const common_1 = require("@nestjs/common");
const aliyun_oss_client_1 = require("./oss/aliyun-oss-client");
class Oss {
    constructor(settingService) {
        this.settingService = settingService;
    }
    async getConfig() {
        const data = await this.settingService.findAll(true);
        const config = JSON.parse(data.oss);
        if (!config) {
            throw new common_1.HttpException('OSS 配置不完善，无法进行操作', common_1.HttpStatus.BAD_REQUEST);
        }
        return config;
    }
    async getOssClient() {
        const config = await this.getConfig();
        const type = String(config.type).toLowerCase();
        switch (type) {
            case 'aliyun':
            default:
                return new aliyun_oss_client_1.AliyunOssClient(config);
        }
    }
    async putFile(filepath, buffer) {
        const client = await this.getOssClient();
        const url = await client.putFile(filepath, buffer);
        return url;
    }
    async deleteFile(url) {
        const client = await this.getOssClient();
        await client.deleteFile(url);
    }
}
exports.Oss = Oss;
//# sourceMappingURL=oss.util.js.map