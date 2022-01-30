import { Column, PrimaryGeneratedColumn } from "typeorm";

export class UserCourseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  id_user: string;
  @Column()
  id_couse: string;
}