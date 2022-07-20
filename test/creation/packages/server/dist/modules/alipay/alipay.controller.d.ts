import { ArticleService } from '../article/article.service';
export declare class AlipayController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(body: any): Promise<string | import("alipay-sdk").AlipaySdkCommonResult>;
    notify(body: any): Promise<void>;
}
