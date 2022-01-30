import { Body, Controller, Put, Get, Post, Param, Delete, } from '@nestjs/common';
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

  @Put(':id')
  @ApiBody({ type: CourseDto})
  async update(@Param() id:string, @Body() course: CourseEntity): Promise<void> {
    return await this.courseService.update(id,course);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.courseService.delete(id);
  }

}
