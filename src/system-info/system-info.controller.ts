import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { SystemInfoService } from './system-info.service';
import { CreateSystemInfoDto } from './dto/create-system-info.dto';
import { UpdateSystemInfoDto } from './dto/update-system-info.dto';
import { SystemInfo } from "./schemas/system-info.schema";

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

  //@Get(':page')
 // findOne(@Query('page') page: string) {
 //   return this.systemInfoService.findOne(page);
 // }

  @Get('/:page')
  findByPage(
    @Param('page') page: string,
    @Query() filter: string,
  ): Promise<SystemInfo[]> {
    return this.systemInfoService.findByPage(page);
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
