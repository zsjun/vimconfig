import { Repository } from 'typeorm';
import { SettingService } from '../setting/setting.service';
import { File } from './file.entity';
export declare class FileService {
    private readonly fileRepository;
    private readonly settingService;
    private oss;
    constructor(fileRepository: Repository<File>, settingService: SettingService);
    uploadFile(file: any, unique: any): Promise<File>;
    findAll(queryParams: any): Promise<[File[], number]>;
    findById(id: any): Promise<File>;
    findByIds(ids: any): Promise<Array<File>>;
    deleteById(id: any): Promise<File>;
}
