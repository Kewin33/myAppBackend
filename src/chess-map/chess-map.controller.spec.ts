import { Test, TestingModule } from '@nestjs/testing';
import { ChessMapController } from './chess-map.controller';

describe('ChessMapController', () => {
  let controller: ChessMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChessMapController],
    }).compile();

    controller = module.get<ChessMapController>(ChessMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
