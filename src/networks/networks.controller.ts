import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { NetworksService } from './networks.service';
import { CreateNetworksDto } from './dto/create-network.dto';
import { UpdateNetworksDto } from './dto/update-network.dto';
import { Networks } from "./schemas/networks.schema";

@Controller('networks')
export class NetworksController {
  constructor(private readonly networksService: NetworksService) {
  }
  @Post()
  create(@Body() createNetworksDto: CreateNetworksDto) {
    return this.networksService.create(createNetworksDto);
  }

  @Get()
  getAll() {
    return this.networksService.getAll();
  }

  @Put(':id')
  update(@Body() updateNetworksDto:UpdateNetworksDto, @Param('id') id:string): Promise<Networks>{
    return this.networksService.update(id, updateNetworksDto)
  }
}
