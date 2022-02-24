import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { Role } from "../enums/role.enum";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { Roles } from "../enums/roles.decorator";
import { DevicesService } from "./devices.service";
import { Device } from "./schemas/device.schema";


@Controller('devices')
export class DevicesController {
  private createDeviceDto: CreateDeviceDto;
  constructor(private readonly devicesService: DevicesService) {
  }
  @Get()
  getAll(): Promise<Device[]>{
    return this.devicesService.getAll()
  }


  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control','none')
 // @Roles(Role.Admin)
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto)
  }
}
