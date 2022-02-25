import { Module } from '@nestjs/common';
import { OsInfoService } from './os-info.service';
import { OsInfoController } from './os-info.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { OsInfo, OsInfoSchema } from "./schemas/os-info.schema";

@Module({
  controllers: [OsInfoController],
  providers: [OsInfoService],
  imports:[
    MongooseModule.forFeature([
      {name: OsInfo.name, schema: OsInfoSchema}
    ])
  ]
})
export class OsInfoModule {}
