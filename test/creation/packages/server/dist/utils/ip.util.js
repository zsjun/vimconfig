"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIp = exports.getClientIP = void 0;
const ipSearcher = require('node-ip2region').create();
function getClientIP(req) {
    const ip = req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        (req.connection && req.connection.remoteAddress) ||
        (req.socket && req.socket.remoteAddress) ||
        (req.connection && req.connection.socket && req.connection.socket.remoteAddress);
    return ip ? ip.split(':').pop() : '';
}
exports.getClientIP = getClientIP;
function parseIp(ip) {
    try {
        const { region } = ipSearcher.btreeSearchSync(ip);
        return region
            .split('|')
            .filter((d) => +d !== 0)
            .join(' ');
    }
    catch (e) {
        return '';
    }
}
exports.parseIp = parseIp;
//# sourceMappingURL=ip.util.js.map