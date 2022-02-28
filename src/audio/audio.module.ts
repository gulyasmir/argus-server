import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Audio, AudioSchema } from "./schemas/audio.schema";


@Module({
  controllers: [AudioController],
  providers: [AudioService],
  imports:[
    MongooseModule.forFeature([
      {name: Audio.name, schema:AudioSchema}
    ])
  ]
})
export class AudioModule {}
