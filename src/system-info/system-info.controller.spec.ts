import { Test, TestingModule } from '@nestjs/testing';
import { SystemInfoController } from './system-info.controller';
import { SystemInfoService } from './system-info.service';

describe('SystemInfoController', () => {
  let controller: SystemInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemInfoController],
      providers: [SystemInfoService],
    }).compile();

    controller = module.get<SystemInfoController>(SystemInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
