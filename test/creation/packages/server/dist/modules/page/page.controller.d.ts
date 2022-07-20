import { Page } from './page.entity';
import { PageService } from './page.service';
export declare class PageController {
    private readonly pageService;
    constructor(pageService: PageService);
    create(page: any): Promise<Page>;
    findAll(queryParams: any): Promise<[Page[], number]>;
    findById(id: any): Promise<Page>;
    updateById(id: any, page: any): Promise<Page>;
    updateViewsById(id: any): Promise<Page>;
    deleteById(id: any): Promise<Page>;
}
