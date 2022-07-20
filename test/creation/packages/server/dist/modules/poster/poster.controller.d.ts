import { PosterService } from './poster.service';
import { Poster } from './poster.entity';
export declare class PosterController {
    private readonly service;
    constructor(service: PosterService);
    uploadFile(data: any): Promise<{
        url: string;
        name: string;
    }>;
    findAll(queryParam: any): Promise<[Poster[], number]>;
    deleteById(id: any): Promise<Poster>;
}
