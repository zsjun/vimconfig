"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const merge = require("deepmerge");
const setting_entity_1 = require("./setting.entity");
const setting_constant_1 = require("./setting.constant");
let SettingService = class SettingService {
    constructor(settingRepository) {
        this.settingRepository = settingRepository;
        this.initI18n();
    }
    async initI18n() {
        const items = await this.settingRepository.find();
        const target = (items && items[0]) || {};
        let data = {};
        try {
            data = JSON.parse(target.i18n);
        }
        catch (e) {
            data = {};
        }
        target.i18n = JSON.stringify(merge({}, setting_constant_1.i18n, data));
        await this.settingRepository.save(target);
    }
    async findAll(innerInvoke = false, isAdmin = false) {
        const data = await this.settingRepository.find();
        const res = data[0];
        if (!res) {
            return {};
        }
        if (innerInvoke || isAdmin) {
            return res;
        }
        const filterRes = setting_constant_1.UNPROTECTED_KEYS.reduce((a, c) => {
            a[c] = res[c];
            return a;
        }, {});
        return filterRes;
    }
    async update(setting) {
        const old = await this.settingRepository.find();
        const updatedTag = old && old[0]
            ? await this.settingRepository.merge(old[0], setting)
            : await this.settingRepository.create(setting);
        return this.settingRepository.save(updatedTag);
    }
};
SettingService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(setting_entity_1.Setting)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SettingService);
exports.SettingService = SettingService;
//# sourceMappingURL=setting.service.js.map