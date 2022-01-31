import { UserEntity } from "src/users/entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserCourseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @ManyToMany(() => UserEntity, user => user.userCourses)
  @JoinTable()
  users: UserEntity[];
  @Column()
  id_course: string;
}