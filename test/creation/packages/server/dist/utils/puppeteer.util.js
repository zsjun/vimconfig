"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = void 0;
const os = require("os");
const fs = require("fs-extra");
const path = require("path");
const puppeteer = require("puppeteer");
const uniqueid_util_1 = require("./uniqueid.util");
const tmpdir = path.join(os.tmpdir(), '/poster/');
async function createImage({ html, width, height, ratio, ext = 'png' }) {
    width = Math.ceil(width);
    height = Math.ceil(height);
    const filepath = path.join(tmpdir, `${uniqueid_util_1.uniqueid()}.${ext}`);
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setViewport({
        width,
        height,
        deviceScaleFactor: ratio,
    });
    await page.setContent(html);
    fs.ensureDir(tmpdir);
    await page.screenshot({
        path: filepath,
        fullPage: true,
    });
    await browser.close();
    return { filepath, buffer: fs.createReadStream(filepath), size: fs.statSync(filepath).size };
}
exports.createImage = createImage;
//# sourceMappingURL=puppeteer.util.js.map