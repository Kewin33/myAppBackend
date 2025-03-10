import { Test, TestingModule } from '@nestjs/testing';
import { ChessMapService } from './chess-map.service';

describe('ChessMapService', () => {
  let service: ChessMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChessMapService],
    }).compile();

    service = module.get<ChessMapService>(ChessMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
