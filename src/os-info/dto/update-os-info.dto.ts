import { PartialType } from '@nestjs/mapped-types';
import { CreateOsInfoDto } from './create-os-info.dto';

export class UpdateOsInfoDto extends PartialType(CreateOsInfoDto) {}
