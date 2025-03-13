import { Test, TestingModule } from '@nestjs/testing';
import { ChessTokController } from './chess-tok.controller';

describe('ChessTokController', () => {
  let controller: ChessTokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChessTokController],
    }).compile();

    controller = module.get<ChessTokController>(ChessTokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
