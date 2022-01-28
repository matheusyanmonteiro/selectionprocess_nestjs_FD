import { ApiProperty } from "@nestjs/swagger";

export class CourseDto{
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  duration: number;
  @ApiProperty()
  category: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  tutor_id: string;
}