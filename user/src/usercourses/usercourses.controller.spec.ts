import { Test, TestingModule } from '@nestjs/testing';
import { UsercoursesController } from './usercourses.controller';

describe('UsercoursesController', () => {
  let controller: UsercoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsercoursesController],
    }).compile();

    controller = module.get<UsercoursesController>(UsercoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
