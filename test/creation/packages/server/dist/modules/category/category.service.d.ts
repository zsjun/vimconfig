import { Repository } from 'typeorm';
import { Category } from './category.entity';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    create(Category: Partial<Category>): Promise<Category>;
    findAll(queryParams: any): Promise<Category[]>;
    findById(id: any): Promise<Category>;
    findByIds(ids: any): Promise<Array<Category>>;
    updateById(id: any, category: Partial<Category>): Promise<Category>;
    deleteById(id: any): Promise<boolean>;
}
