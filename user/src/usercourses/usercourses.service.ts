import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {UserCourseEntity} from './entity/userCourse.entity'

@Injectable()
export class UsercoursesService {
  constructor(
    @InjectRepository(UserCourseEntity)
    private userCourseRepository: Repository<UserCourseEntity>
  )
  {}
}
