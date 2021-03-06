import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  duration: number;
  @Column()
  category: string;
  @Column()
  image: string;
  @Column()
  tutor_id: string;
  

}