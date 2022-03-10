import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { NetworksService } from './networks.service';
import { CreateNetworksDto } from './dto/create-network.dto';
import { UpdateNetworksDto } from './dto/update-network.dto';
import { Networks } from "./schemas/networks.schema";

@Controller('networks')
export class NetworksController {
  private createNetworksDto: CreateNetworksDto;
  constructor(private readonly networksService: NetworksService) {
  }
  @Post()
  create(@Body() createNetworkDto: CreateNetworksDto) {
    return this.networksService.create(createNetworkDto);
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
