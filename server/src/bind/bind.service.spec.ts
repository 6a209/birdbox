import { Test, TestingModule } from '@nestjs/testing';
import { BindService } from './bind.service';

describe('BindService', () => {
  let service: BindService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BindService],
    }).compile();

    service = module.get<BindService>(BindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
