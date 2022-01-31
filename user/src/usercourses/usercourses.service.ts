import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { catchError } from 'rxjs/operators';
import { UserEntity } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserCourseDTO } from './dtos/create.userCourse.dto';
import {UserCourseEntity} from './entity/userCourse.entity'
import { IUserCourses } from './interface/userCourse.interface';

@Injectable()
export class UserCoursesService {
  constructor(
    @InjectRepository(UserCourseEntity)
    private userCourseRepository: Repository<UserCourseEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private httpService: HttpService
  )
  {}

  async findAll(): Promise<UserCourseEntity[]>{
    return this.userCourseRepository.find();
  }

  async create(userCourse: CreateUserCourseDTO): Promise<UserCourseEntity> {
    const user = await this.userRepository.findOne(userCourse.id_user);

    if (!user) {
      throw new HttpException("user not exists!",HttpStatus.NOT_FOUND);
    }
    
    try {
      await axios.get(`http://localhost:3333/courses/${userCourse.id_course}`)
    }
    catch{
      throw new HttpException("course not exists!",HttpStatus.NOT_FOUND)
    }

    

    return this.userCourseRepository.save({
      id_course: userCourse.id_course,
      users: [user]
    });
  }


}
