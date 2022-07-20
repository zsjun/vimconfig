import { Repository } from 'typeorm';
import { SettingService } from '../setting/setting.service';
import { Poster } from './poster.entity';
export declare class PosterService {
    private readonly repository;
    private readonly settingService;
    private oss;
    constructor(repository: Repository<Poster>, settingService: SettingService);
    createPoster({ pageUrl, name, width, height, html, }: {
        pageUrl: any;
        name: any;
        width: any;
        height: any;
        html: any;
    }): Promise<{
        url: string;
        name: string;
    }>;
    findAll(queryParams: any): Promise<[Poster[], number]>;
    deleteById(id: any): Promise<Poster>;
}
