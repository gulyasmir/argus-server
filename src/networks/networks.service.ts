import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Networks, NetworksDocument } from "./schemas/networks.schema";
import { CreateNetworksDto } from "./dto/create-network.dto";

@Injectable()
export class NetworksService {
  constructor(@InjectModel(Networks.name) private networksModel:Model<NetworksDocument>) {
  }

  async getAll(): Promise<Networks[]>{
    return this.networksModel.find().exec()
  }

  async create(networksDto: CreateNetworksDto): Promise<Networks>{
    const  newNetworks = new this.networksModel(networksDto)
    return  newNetworks.save()
  }

  async  update(id: string, networksDto: CreateNetworksDto): Promise<Networks>{
    return  this.networksModel.findByIdAndUpdate(id, networksDto, {new: true})
  }
}
