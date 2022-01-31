import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCourseEntity } from 'src/usercourses/entity/userCourse.entity';
import { UserEntity } from 'src/users/entity/user.entity';

@Module({ imports: [ TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '12345',
  database: 'user',
  entities: [
    UserEntity,
    UserCourseEntity],
  synchronize: true
}),]
})
export class DatabaseModule {}
