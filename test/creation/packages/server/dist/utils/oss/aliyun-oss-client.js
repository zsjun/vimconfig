"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliyunOssClient = void 0;
const AliyunOSS = require("ali-oss");
const oss_client_1 = require("./oss-client");
class AliyunOssClient extends oss_client_1.OssClient {
    async buildClient() {
        const config = this.config;
        return new AliyunOSS({
            region: config.region,
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret,
            bucket: config.bucket,
            secure: config.https,
        });
    }
    async putFile(filepath, buffer) {
        const client = await this.buildClient();
        const { url } = await client.put(filepath, buffer);
        return url;
    }
    async deleteFile(url) {
        const client = await this.buildClient();
        await client.delete(url);
    }
}
exports.AliyunOssClient = AliyunOssClient;
//# sourceMappingURL=aliyun-oss-client.js.map