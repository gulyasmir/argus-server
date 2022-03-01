import { Module } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { ProcessesController } from './processes.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Proccess, ProccessSchema } from "./schemas/process.schema";

@Module({
  controllers: [ProcessesController],
  providers: [ProcessesService],
  imports:[
    MongooseModule.forFeature([
      {name: Proccess.name, schema: ProccessSchema}
    ])
  ]
})
export class ProcessesModule {}
