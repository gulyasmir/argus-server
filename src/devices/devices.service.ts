import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Device, DeviceDocument } from "./schemas/device.schema";
import { CreateDeviceDto } from "./dto/create-device.dto";

@Injectable()
export class DevicesService {
  constructor(@InjectModel(Device.name) private deviceModel:Model<DeviceDocument>) {
  }

  async getAll(): Promise<Device[]>{
    return this.deviceModel.find().exec()
  }

  async create(deviceDto: CreateDeviceDto): Promise<Device>{
    const  newDevice = new this.deviceModel(deviceDto)
    return  newDevice.save()
  }

  async  update(id: string, deviceDto: CreateDeviceDto): Promise<Device>{
    return  this.deviceModel.findByIdAndUpdate(id, deviceDto, {new: true})
  }
}
