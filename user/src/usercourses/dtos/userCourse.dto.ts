import { ApiProperty } from "@nestjs/swagger";

export class UserCourseDTO {
  @ApiProperty()
  id_user: string;
  @ApiProperty()
  id_couse: string;
}