import { DynamicModule } from '@nestjs/common';
import { TConfigMap } from '@nestjs-nodo/config';
import { AwsS3ConfigDto } from './dto/aws-s3-config.dto';
export declare class AwsS3Module {
    static forFeature(configMap: TConfigMap<AwsS3ConfigDto>): DynamicModule;
}
