import { Injectable , Query} from '@nestjs/common';
import { CreateSystemInfoDto } from './dto/create-system-info.dto';
import { UpdateSystemInfoDto } from './dto/update-system-info.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SystemInfo, SystemInfoDocument } from "./schemas/system-info.schema";
import { Device } from "../devices/schemas/device.schema";

@Injectable()
export class SystemInfoService {
  constructor(@InjectModel(SystemInfo.name) private systemInfoModel:Model<SystemInfoDocument>) {
  }
  create(createSystemInfoDto: CreateSystemInfoDto) {
    const  newSystemInfo = new this.systemInfoModel(createSystemInfoDto)
    return  newSystemInfo.save()
  }

  findAll(): Promise<SystemInfo[]> {
    return this.systemInfoModel.find().exec()
  }

  findByPage(page: string): Promise<SystemInfo[]> {
    console.log('findOne', this.systemInfoModel.find({ page: page }).exec())
    return this.systemInfoModel.find({ page: page }).exec()
  }

  update(id: number, updateSystemInfoDto: UpdateSystemInfoDto) {
    return `This action updates a #${id} systemInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} systemInfo`;
  }
}
