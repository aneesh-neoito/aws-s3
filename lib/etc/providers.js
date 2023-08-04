"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAwsS3Token = exports.getAwsS3Provider = exports.InjectAwsS3 = void 0;
const utils_1 = require("@nestjs-nodo/utils");
const config_1 = require("@nestjs-nodo/config");
const AWS = require("aws-sdk");
const log_1 = require("@nestjs-nodo/log");
const constants_1 = require("./constants");
_a = utils_1.ProviderUtils.createDynamicProvider({
    mapper: (param) => param.name,
    namespace: 'AWS_S3',
    provider: (param) => {
        return {
            inject: [config_1.getConfigToken(param), log_1.getLoggerToken(constants_1.AWS_S3_LOGGER_NAME)],
            useFactory: (config, logger) => {
                return new AWS.S3({
                    region: config.region,
                    endpoint: config.endpoint,
                    apiVersion: 'latest',
                    s3ForcePathStyle: config.s3ForcePathStyle,
                    logger,
                    credentials: {
                        accessKeyId: config.accessKey,
                        secretAccessKey: config.secretKey,
                    },
                });
            },
        };
    },
}), exports.InjectAwsS3 = _a.getInjector, exports.getAwsS3Provider = _a.getProvider, exports.getAwsS3Token = _a.getToken;
