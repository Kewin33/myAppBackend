import { Test, TestingModule } from '@nestjs/testing';
import { ChessTokService } from './chess-tok.service';

describe('ChessTokService', () => {
  let service: ChessTokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChessTokService],
    }).compile();

    service = module.get<ChessTokService>(ChessTokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
