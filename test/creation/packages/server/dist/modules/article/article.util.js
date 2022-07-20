"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractProtectedArticle = void 0;
exports.extractProtectedArticle = (article) => {
    delete article.content;
    delete article.html;
};
//# sourceMappingURL=article.util.js.map