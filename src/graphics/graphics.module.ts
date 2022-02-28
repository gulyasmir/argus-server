import { Module } from '@nestjs/common';
import { GraphicsService } from './graphics.service';
import { GraphicsController } from './graphics.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Graphics, GraphicsSchema } from "./schemas/graphics.schema";

@Module({
  controllers: [GraphicsController],
  providers: [GraphicsService],
  imports:[
    MongooseModule.forFeature([
      {name: Graphics.name, schema: GraphicsSchema}
    ])
  ]
})
export class GraphicsModule {}
