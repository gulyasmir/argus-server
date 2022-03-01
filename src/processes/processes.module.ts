import { Module } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { ProcessesController } from './processes.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Process, ProcessSchema } from "./schemas/process.schema";

@Module({
  controllers: [ProcessesController],
  providers: [ProcessesService],
  imports:[
    MongooseModule.forFeature([
      {name: Process.name, schema: ProcessSchema}
    ])
  ]
})
export class ProcessesModule {}
