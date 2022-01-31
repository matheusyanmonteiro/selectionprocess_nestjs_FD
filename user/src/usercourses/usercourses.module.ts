import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entity/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserCourseEntity } from './entity/userCourse.entity';
import { UserCoursesController } from './usercourses.controller';
import { UserCoursesService } from './usercourses.service';

@Module({
  imports:[
    HttpModule,
    TypeOrmModule.forFeature([UserCourseEntity, UserEntity])
  ],
  controllers: [UserCoursesController],
  providers: [UserCoursesService]
})
export class UserCoursesModule {}
