import { Test, TestingModule } from '@nestjs/testing';
import { BindController } from './bind.controller';
import { BindService } from './bind.service';

describe('BindController', () => {
  let controller: BindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BindController],
      providers: [BindService],
    }).compile();

    controller = module.get<BindController>(BindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
