import { KnowledgeService } from './knowledge.service';
import { Knowledge } from './knowledge.entity';
export declare class KnowledgeController {
    private readonly service;
    constructor(service: KnowledgeService);
    createBook(data: any): Promise<Knowledge>;
    createChapter(data: any): Promise<Knowledge[]>;
    deleteById(id: any): Promise<Knowledge>;
    updateById(id: any, data: any): Promise<Knowledge>;
    findAll(queryParams: any): Promise<[Knowledge[], number]>;
    findById(id: any): Promise<Partial<Knowledge>>;
    updateViewsById(id: any): Promise<Knowledge>;
    updateLikesById(id: any, type: any): Promise<Knowledge>;
}
