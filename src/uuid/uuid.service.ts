import { Injectable } from '@nestjs/common';
import { CreateUuidDto } from './dto/create-uuid.dto';
import { UpdateUuidDto } from './dto/update-uuid.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Uuid, UuidDocument } from "./schemas/uuid.schema";

@Injectable()
export class UuidService {
  constructor(@InjectModel(Uuid.name) private uuidModel:Model<UuidDocument>) {

  }

  create(createUuidDto: CreateUuidDto): Promise<Uuid> {
    const  newUuid = new this.uuidModel(createUuidDto)
    return  newUuid.save()
  }

  findAll() {
    return this.uuidModel.find().exec()
  }

  findByUuid(uuid: string): Promise<Uuid[]> {
    return this.uuidModel.find({ uuid: uuid }).exec()
  }


  update(id: number, updateUuidDto: UpdateUuidDto) {
    return `This action updates a #${id} uuid`;
  }

  remove(id: number) {
    return `This action removes a #${id} uuid`;
  }
}
