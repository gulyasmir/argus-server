import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Audio, AudioDocument } from "./schemas/audio.schema";

@Injectable()
export class AudioService {
  constructor(@InjectModel(Audio.name) private audioModel:Model<AudioDocument>) {
  }
  create(createAudioDto: CreateAudioDto) {
    const  newAudio = new this.audioModel(createAudioDto)
    return  newAudio.save()
  }

  findAll(): Promise<Audio[]> {
    return this.audioModel.find().exec()
  }
  findOne(id: number) {
    return `This action returns a #${id} audio`;
  }

  update(id: number, updateAudioDto: UpdateAudioDto) {
    return `This action updates a #${id} audio`;
  }

  remove(id: number) {
    return `This action removes a #${id} audio`;
  }
}
