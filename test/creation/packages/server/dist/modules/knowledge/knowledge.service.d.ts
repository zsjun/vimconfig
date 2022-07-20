import { Repository } from 'typeorm';
import { Knowledge } from './knowledge.entity';
export declare class KnowledgeService {
    private readonly repository;
    constructor(repository: Repository<Knowledge>);
    createKnowledgeBook(knowledge: Partial<Knowledge>): Promise<Knowledge>;
    createKnowledgeChapter(knowledges: Partial<Knowledge> | Array<Partial<Knowledge>>): Promise<Array<Knowledge>>;
    deleteById(id: any): Promise<Knowledge>;
    updateById(id: any, data: Partial<Knowledge>): Promise<Knowledge>;
    updateViewsById(id: any): Promise<Knowledge>;
    updateLikesById(id: any, type: any): Promise<Knowledge>;
    findAll(queryParams: any): Promise<[Knowledge[], number]>;
    findById(id: any): Promise<Partial<Knowledge>>;
}
