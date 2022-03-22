import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { UuidService } from './uuid.service';
import { CreateUuidDto } from './dto/create-uuid.dto';
import { UpdateUuidDto } from './dto/update-uuid.dto';
import { Uuid } from "./schemas/uuid.schema";

@Controller('uuid')
export class UuidController {
  constructor(private readonly uuidService: UuidService) {}

  @Post()
  create(@Body() createUuidDto: CreateUuidDto) {
    return this.uuidService.create(createUuidDto);
  }

  @Get()
  findAll() {
    return this.uuidService.findAll();
  }


  @Get('/:uuid')
  findByUuid(
    @Param('uuid') uuid: string,
    @Query() filter: string,
  ): Promise<Uuid[]> {
    return this.uuidService.findByUuid(uuid);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUuidDto: UpdateUuidDto) {
    return this.uuidService.update(+id, updateUuidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uuidService.remove(+id);
  }
}
