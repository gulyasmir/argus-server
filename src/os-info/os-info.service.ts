import { Injectable, Query } from "@nestjs/common";
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

  async create(createOsInfoDto: CreateOsInfoDto): Promise<OsInfo>{
    const  newOsInfo = new this.osInfoModel(createOsInfoDto)
    return  newOsInfo.save()
  }

  async find(id_device: string) {
    const entities = await this.query({ filter: { completed: { id_device: id_device } } });
    var array =[{id_device:10}, {id_device:20}]
    var millionPlusCities = array.filter(e => e.id_device >0);
    console.log(entities);
   // return array.filter(item => item.item > 10)
  }

  update(id: number, updateOsInfoDto: UpdateOsInfoDto) {
    return `This action updates a #${id} osInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} osInfo`;
  }

  private async query(param: { filter: { completed: { id_device: string } } }) {

  }
}
