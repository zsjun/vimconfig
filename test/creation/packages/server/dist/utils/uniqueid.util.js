"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueid = void 0;
const nuid_1 = require("nuid");
function uniqueid() {
    return nuid_1.next();
}
exports.uniqueid = uniqueid;
//# sourceMappingURL=uniqueid.util.js.map