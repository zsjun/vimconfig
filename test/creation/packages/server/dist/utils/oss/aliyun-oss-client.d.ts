import { OssClient } from './oss-client';
export declare class AliyunOssClient extends OssClient {
    private buildClient;
    putFile(filepath: string, buffer: ReadableStream): Promise<any>;
    deleteFile(url: string): Promise<void>;
}
