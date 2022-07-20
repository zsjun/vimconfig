import { SettingService } from '../modules/setting/setting.service';
import { OssClient } from './oss/oss-client';
export declare class Oss {
    settingService: SettingService;
    config: Record<string, unknown>;
    ossClient: OssClient;
    constructor(settingService: SettingService);
    private getConfig;
    private getOssClient;
    putFile(filepath: string, buffer: ReadableStream): Promise<any>;
    deleteFile(url: string): Promise<void>;
}
