import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "src/users/entity/user.entity";

export class UserCourseDTO {
  @ApiProperty()
  users: UserEntity[]
  @ApiProperty()
  id_course: string;
}