import { Test, TestingModule } from '@nestjs/testing';
import { OsInfoController } from './os-info.controller';
import { OsInfoService } from './os-info.service';

describe('OsInfoController', () => {
  let controller: OsInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OsInfoController],
      providers: [OsInfoService],
    }).compile();

    controller = module.get<OsInfoController>(OsInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
