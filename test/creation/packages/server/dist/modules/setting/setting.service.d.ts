import { Repository } from 'typeorm';
import { Setting } from './setting.entity';
export declare class SettingService {
    private readonly settingRepository;
    constructor(settingRepository: Repository<Setting>);
    initI18n(): Promise<void>;
    findAll(innerInvoke?: boolean, isAdmin?: boolean): Promise<Setting>;
    update(setting: Partial<Setting>): Promise<Setting>;
}
