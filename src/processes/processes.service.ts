import { Injectable } from '@nestjs/common';
import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Proccess, ProccessDocument } from "./schemas/proccess.schema";

@Injectable()
export class ProcessesService {
  constructor(@InjectModel(Proccess.name) private processModel:Model<ProccessDocument>) {
  }
  create(createProcessDto: CreateProcessDto) {
    const  newProccess = new this.processModel(createProcessDto)
    return  newProccess.save()
  }

  findAll() {
    return this.processModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} process`;
  }

  update(id: number, updateProcessDto: UpdateProcessDto) {
    return `This action updates a #${id} process`;
  }

  remove(id: number) {
    return `This action removes a #${id} process`;
  }
}
