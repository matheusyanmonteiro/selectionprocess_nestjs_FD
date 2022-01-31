import { UserCourseEntity } from "src/usercourses/entity/userCourse.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  email: string;

  @ManyToMany(() => UserCourseEntity, userCourse => userCourse.users)
  userCourses: UserEntity[]
}