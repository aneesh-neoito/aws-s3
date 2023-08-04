"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AwsS3Module_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3Module = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs-nodo/config");
const providers_1 = require("./etc/providers");
const log_1 = require("@nestjs-nodo/log");
const constants_1 = require("./etc/constants");
let AwsS3Module = AwsS3Module_1 = class AwsS3Module {
    static forFeature(configMap) {
        const providers = [providers_1.getAwsS3Provider(configMap)];
        return {
            module: AwsS3Module_1,
            imports: [config_1.ConfigModule.forFeature(configMap), log_1.LogModule.forFeature(constants_1.AWS_S3_LOGGER_NAME)],
            providers: [...providers],
            exports: [...providers, config_1.ConfigModule],
        };
    }
};
AwsS3Module = AwsS3Module_1 = __decorate([
    common_1.Module({})
], AwsS3Module);
exports.AwsS3Module = AwsS3Module;
