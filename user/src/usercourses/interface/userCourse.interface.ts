import { UserEntity } from "src/users/entity/user.entity";

export class IUserCourses {
  id?: string;
  user: UserEntity[]
  id_course: string;
}