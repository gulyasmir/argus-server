import { Injectable } from '@nestjs/common';
import { CreateSystemInfoDto } from './dto/create-system-info.dto';
import { UpdateSystemInfoDto } from './dto/update-system-info.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SystemInfo, SystemInfoDocument } from "./schemas/system-info.schema";

@Injectable()
export class SystemInfoService {
  constructor(@InjectModel(SystemInfo.name) private systemInfoModel:Model<SystemInfoDocument>) {
  }
  create(createSystemInfoDto: CreateSystemInfoDto) {
    const  newSystemInfo = new this.systemInfoModel(createSystemInfoDto)
    return  newSystemInfo.save()
  }

  findAll() {
    return this.systemInfoModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} systemInfo`;
  }

  update(id: number, updateSystemInfoDto: UpdateSystemInfoDto) {
    return `This action updates a #${id} systemInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} systemInfo`;
  }
}
