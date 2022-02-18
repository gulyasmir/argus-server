import { Module } from '@nestjs/common';

import { MongooseModule } from "@nestjs/mongoose";
import { Device, DeviceSchema } from "./schemas/device.schema";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";


@Module({
  providers:[DevicesService],
  controllers:[DevicesController],
  imports:[
    MongooseModule.forFeature([
      {name: Device.name, schema: DeviceSchema}
    ])
  ]
})
export class DevicesModule {}
