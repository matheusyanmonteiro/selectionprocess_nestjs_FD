import { Module } from '@nestjs/common';
import { UsercoursesController } from './usercourses.controller';
import { UsercoursesService } from './usercourses.service';

@Module({
  controllers: [UsercoursesController],
  providers: [UsercoursesService]
})
export class UsercoursesModule {}
