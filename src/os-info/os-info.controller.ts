import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OsInfoService } from './os-info.service';
import { CreateOsInfoDto } from './dto/create-os-info.dto';
import { UpdateOsInfoDto } from './dto/update-os-info.dto';

@Controller('os-info')
export class OsInfoController {
  constructor(private readonly osInfoService: OsInfoService) {}

  @Post()
  create(@Body() createOsInfoDto: CreateOsInfoDto) {
    return this.osInfoService.create(createOsInfoDto);
  }

  @Get()
  findAll() {
    return this.osInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.osInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOsInfoDto: UpdateOsInfoDto) {
    return this.osInfoService.update(+id, updateOsInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.osInfoService.remove(+id);
  }
}
