import { Module } from '@nestjs/common';
import { UuidService } from './uuid.service';
import { UuidController } from './uuid.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Uuid, UuidSchema } from "./schemas/uuid.schema";

@Module({
  controllers: [UuidController],
  providers: [UuidService],
  imports:[
    MongooseModule.forFeature([
      {name: Uuid.name, schema: UuidSchema}
    ])
  ]
})
export class UuidModule {}
