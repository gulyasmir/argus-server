import { Test, TestingModule } from '@nestjs/testing';
import { SystemInfoService } from './system-info.service';

describe('SystemInfoService', () => {
  let service: SystemInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemInfoService],
    }).compile();

    service = module.get<SystemInfoService>(SystemInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
