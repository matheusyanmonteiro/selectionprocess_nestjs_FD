import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CourseDto } from './dtos/course.dto';
import { CourseEntity } from './entity/course.entity';

@Controller('courses')
export class CoursesController {
  
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  async index(): Promise<CourseEntity[]> {
    return await this.courseService.findAll();
  }


  @Post()
  @ApiBody({ type: CourseDto})
  async Create(@Body() course: CourseDto): Promise<CourseEntity> {
    return await this.courseService.create(course);
  }

}
