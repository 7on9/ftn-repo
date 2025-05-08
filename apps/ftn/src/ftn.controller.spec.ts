import { Test, TestingModule } from '@nestjs/testing';
import { FtnController } from './ftn.controller';
import { FtnService } from './ftn.service';

describe('FtnController', () => {
  let ftnController: FtnController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FtnController],
      providers: [FtnService],
    }).compile();

    ftnController = app.get<FtnController>(FtnController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ftnController.getHello()).toBe('Hello World!');
    });
  });
});
