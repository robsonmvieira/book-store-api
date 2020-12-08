import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

  @ApiProperty()
  @IsString()
  name?: string

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsString()
  class?: string

  @ApiProperty()
  semester?: number

  @ApiProperty()
  @MinLength(6)
  password?: string

  @ApiProperty()
  @IsString()
  course?: string

  @IsString()
  @ApiProperty()
  profile?: string

  @IsString()
  @ApiProperty()
  role?: string[]
}
