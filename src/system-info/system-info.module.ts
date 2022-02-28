import { Module } from '@nestjs/common';
import { SystemInfoService } from './system-info.service';
import { SystemInfoController } from './system-info.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { SystemInfo, SystemInfoSchema } from "./schemas/system-info.schema";

@Module({
  controllers: [SystemInfoController],
  providers: [SystemInfoService],
  imports:[
    MongooseModule.forFeature([
      {name: SystemInfo.name, schema: SystemInfoSchema}
    ])
  ]
})
export class SystemInfoModule {}
