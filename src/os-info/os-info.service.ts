import { Injectable } from '@nestjs/common';
import { CreateOsInfoDto } from './dto/create-os-info.dto';
import { UpdateOsInfoDto } from './dto/update-os-info.dto';

@Injectable()
export class OsInfoService {
  create(createOsInfoDto: CreateOsInfoDto) {
    return 'This action adds a new osInfo';
  }

  findAll() {
    return `This action returns all osInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} osInfo`;
  }

  update(id: number, updateOsInfoDto: UpdateOsInfoDto) {
    return `This action updates a #${id} osInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} osInfo`;
  }
}
