import { Injectable } from '@nestjs/common';
import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Process, ProcessDocument } from "./schemas/process.schema";

@Injectable()
export class ProcessesService {
  constructor(@InjectModel(Process.name) private processModel:Model<ProcessDocument>) {
  }
  create(createProcessDto: CreateProcessDto) {
    const  newProcess = new this.processModel(createProcessDto)
    return  newProcess.save()
  }

  findAll() {
    return this.processModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} process`;
  }

  findByProcess(id_process: string): Promise<Process[]> {
    return this.processModel.find({ id_process: id_process }).exec()
  }

  update(id: number, updateProcessDto: UpdateProcessDto) {
    return `This action updates a #${id} process`;
  }

  remove(id: number) {
    return `This action removes a #${id} process`;
  }
}
