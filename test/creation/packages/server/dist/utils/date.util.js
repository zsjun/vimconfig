"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = void 0;
const _dateFormat = require("date-fns/format");
exports.dateFormat = (date = null, format = 'yyyy-MM-dd HH:mm:ss') => {
    if (date === null || date === undefined) {
        date = new Date();
    }
    const t = date instanceof Date ? date : new Date(date);
    return _dateFormat(t, format);
};
//# sourceMappingURL=date.util.js.map