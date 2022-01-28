import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/courses/entity/course.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123',
  database: 'course',
  entities: [CourseEntity],
  synchronize: true
}),]
})
export class DatabaseModule {}
