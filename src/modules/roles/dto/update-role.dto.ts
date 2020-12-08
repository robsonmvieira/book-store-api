import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {

  @ApiProperty()
  @IsString()
  name?: string

  @ApiProperty()
  @IsString()
  description?: string

  @ApiProperty()
  slug?: string

  @ApiProperty()
  permissions?: string[]

  @ApiProperty()
  users?: string[]
}
