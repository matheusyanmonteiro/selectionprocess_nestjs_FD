import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserCourseDTO } from './dtos/create.userCourse.dto';
import { UserCourseEntity } from './entity/userCourse.entity';
import { UserCoursesService } from './usercourses.service';

@Controller('userCourses')
export class UserCoursesController {
  constructor(private readonly userCourseService: UserCoursesService) {}

  @Post()
  @ApiBody({ type: CreateUserCourseDTO})
  async create(@Body() userCourse:CreateUserCourseDTO): Promise<UserCourseEntity>{
    return await this.userCourseService.create(userCourse);
  }
}
