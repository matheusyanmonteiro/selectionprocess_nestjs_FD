import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}