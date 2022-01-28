import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from './entity/course.entity';
import { ICourse } from './interface/course.interface';

@Injectable()
export class CoursesService {
  constructor (
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>)
    {}

    async create(course: ICourse): Promise<CourseEntity> {
      return await this.courseRepository.save(course);
    }
  
}
