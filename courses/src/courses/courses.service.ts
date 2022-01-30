import {  Injectable, NotImplementedException } from '@nestjs/common';
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

    async find(idCourse: string): Promise<ICourse> {
      const {id, name, description, duration, category, image, tutor_id } =
        await this.courseRepository.findOne(idCourse);
     
        const response: ICourse = {
        id,
        name,
        description,
        duration,
        category,
        image,
        tutor_id
      };

      return response;
    }

    async findAll(): Promise<CourseEntity[]> {
      return await this.courseRepository.find();
    }

    async create(course: ICourse): Promise<CourseEntity> {
      return await this.courseRepository.save(course);
    }

    async update(idCourse: string, courseData: CourseEntity): Promise<void> {
     const {
      id,
      name,
      description,
      duration,
      category,
      image,
      tutor_id
    } = courseData;
      const course = await this.find(idCourse);

      course.name = name ? name : course.name;
      course.description = description ? description : course.description;
      course.duration = duration ? duration : course.duration;
      course.category = category ? category : course.category;
      course.image = image ? image : course.image;
      course.tutor_id = tutor_id ? tutor_id : course.tutor_id;
   
      await this.courseRepository.save(course);
    }
  
    async delete(id: string): Promise<void> {
      await this.courseRepository.delete({id});
    }
 
}
