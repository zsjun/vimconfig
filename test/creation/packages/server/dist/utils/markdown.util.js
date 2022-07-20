"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marked = void 0;
const Marked = require("marked");
const hljs = require("highlight.js");
const renderer = new Marked.Renderer();
renderer.heading = (text, level) => {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `
<h${level}>
  <a name="${escapedText}" class="anchor" href="#${escapedText}">
    <span class="header-link"></span>
  </a>
  ${text}
</h${level}>`;
};
Marked.setOptions({
    highlight(code, lang) {
        if (hljs.getLanguage(lang)) {
            return hljs.highlight(lang, code).value;
        }
        return hljs.highlightAuto(code).value;
    },
    renderer,
});
exports.marked = (content) => {
    const toc = [];
    renderer.heading = (text, level) => {
        const anchor = 'heading-' + toc.length;
        toc.push([level, anchor, text]);
        return `<h${level} id="${anchor}">${text}</h${level}>`;
    };
    const marked = (text) => {
        const tok = Marked.lexer(text);
        text = Marked.parser(tok).replace(/<pre>/gi, '<pre class="hljs">');
        return text;
    };
    const html = marked(content);
    return { html, toc: JSON.stringify(toc, null, 2) };
};
//# sourceMappingURL=markdown.util.js.map