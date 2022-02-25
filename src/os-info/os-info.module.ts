import { Module } from '@nestjs/common';
import { OsInfoService } from './os-info.service';
import { OsInfoController } from './os-info.controller';

@Module({
  controllers: [OsInfoController],
  providers: [OsInfoService]
})
export class OsInfoModule {}
