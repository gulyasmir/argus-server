import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateOsInfoDto } from './dto/create-os-info.dto';
import { UpdateOsInfoDto } from './dto/update-os-info.dto';
import { OsInfo, OsInfoDocument } from "./schemas/os-info.schema";

@Injectable()
export class OsInfoService {

  constructor(@InjectModel(OsInfo.name) private osInfoModel:Model<OsInfoDocument>) {
  }

  async findAll(): Promise<OsInfo[]>{
    return this.osInfoModel.find().exec()
  }

  async create(osInfoDto: CreateOsInfoDto): Promise<OsInfo>{
    const  newOsInfo = new this.osInfoModel(osInfoDto)
    return  newOsInfo.save()
  }

  findOne(id: number) {
    return `This action returns a #${id} osInfo`;
  }

  update(id: number, updateOsInfoDto: UpdateOsInfoDto) {
    return `This action updates a #${id} osInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} osInfo`;
  }
}
