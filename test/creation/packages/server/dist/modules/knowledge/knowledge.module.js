"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const knowledge_service_1 = require("./knowledge.service");
const knowledge_controller_1 = require("./knowledge.controller");
const knowledge_entity_1 = require("./knowledge.entity");
let KnowledgeModule = class KnowledgeModule {
};
KnowledgeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([knowledge_entity_1.Knowledge]), auth_module_1.AuthModule],
        exports: [knowledge_service_1.KnowledgeService],
        providers: [knowledge_service_1.KnowledgeService],
        controllers: [knowledge_controller_1.KnowledgeController],
    })
], KnowledgeModule);
exports.KnowledgeModule = KnowledgeModule;
//# sourceMappingURL=knowledge.module.js.map