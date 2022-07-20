"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosterModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const setting_module_1 = require("../setting/setting.module");
const poster_controller_1 = require("./poster.controller");
const poster_service_1 = require("./poster.service");
const poster_entity_1 = require("./poster.entity");
let PosterModule = class PosterModule {
};
PosterModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([poster_entity_1.Poster]), auth_module_1.AuthModule, setting_module_1.SettingModule],
        controllers: [poster_controller_1.PosterController],
        providers: [poster_service_1.PosterService],
    })
], PosterModule);
exports.PosterModule = PosterModule;
//# sourceMappingURL=poster.module.js.map