import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
export declare class ArticleController {
    private readonly articleService;
    private readonly jwtService;
    private readonly userService;
    constructor(articleService: ArticleService, jwtService: JwtService, userService: UserService);
    create(article: any): Promise<Article>;
    findAll(queryParams: any): Promise<[Article[], number]>;
    findArticlesByCategory(category: any, queryParams: any): Promise<(number | Article[])[]>;
    findArticlesByTag(tag: any, queryParams: any): Promise<(number | Article[])[]>;
    getRecommendArticles(): Promise<Article[]>;
    getArchives(): Promise<{
        [key: string]: Article[];
    }>;
    recommend(articleId: any): Promise<Article[]>;
    findById(req: any, id: any, status: any): Promise<Article>;
    checkPassword(id: any, article: any): Promise<{
        pass: boolean;
    }>;
    updateViewsById(id: any): Promise<Article>;
    updateLikesById(id: any, type: any): Promise<Article>;
    updateById(id: any, article: any): Promise<Article>;
    deleteById(id: any): Promise<Article>;
}
