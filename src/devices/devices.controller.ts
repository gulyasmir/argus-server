import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { Role } from "../enums/role.enum";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { Roles } from "../enums/roles.decorator";
import { DevicesService } from "./devices.service";
import { Device } from "./schemas/device.schema";
import { UpdateDeviceDto } from "./dto/update-device-dto";

@Controller('devices')
export class DevicesController {
  private createDeviceDto: CreateDeviceDto;
  constructor(private readonly devicesService: DevicesService) {
  }
  @Get()
  getAll(): Promise<Device[]>{
    return this.devicesService.getAll()
  }
  @Get('/:networks')
  findByNetworks(
    @Param('networks') networks: string,
    @Query() filter: string,
  ): Promise<Device[]> {
    return this.devicesService.findByNetworks(networks);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control','none')
 // @Roles(Role.Admin)
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto)
  }

  @Put(':id')
  update(@Body() updateDeviceDto:UpdateDeviceDto, @Param('id') id:string): Promise<Device>{
    return this.devicesService.update(id, updateDeviceDto)
  }
}
