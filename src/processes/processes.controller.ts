import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { ProcessesService } from './processes.service';
import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';
import { Process } from "./schemas/process.schema";

@Controller('processes')
export class ProcessesController {
  constructor(private readonly processesService: ProcessesService) {}

  @Post()
  create(@Body() createProcessDto: CreateProcessDto) {
    return this.processesService.create(createProcessDto);
  }

  @Get()
  findAll() {
    return this.processesService.findAll();
  }


  @Get('/:id_process')
  findByProcess(
    @Param('id_process') id_process: string,
    @Query() filter: string,
  ): Promise<Process[]> {
    return this.processesService.findByProcess(id_process);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcessDto: UpdateProcessDto) {
    return this.processesService.update(+id, updateProcessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.processesService.remove(+id);
  }
}
