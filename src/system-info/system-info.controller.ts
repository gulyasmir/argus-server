import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SystemInfoService } from './system-info.service';
import { CreateSystemInfoDto } from './dto/create-system-info.dto';
import { UpdateSystemInfoDto } from './dto/update-system-info.dto';

@Controller('system-info')
export class SystemInfoController {
  constructor(private readonly systemInfoService: SystemInfoService) {}

  @Post()
  create(@Body() createSystemInfoDto: CreateSystemInfoDto) {
    return this.systemInfoService.create(createSystemInfoDto);
  }

  @Get()
  findAll() {
    return this.systemInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.systemInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSystemInfoDto: UpdateSystemInfoDto) {
    return this.systemInfoService.update(+id, updateSystemInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.systemInfoService.remove(+id);
  }
}