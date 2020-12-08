import { Role } from '@modules/roles/entities/role.entity';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreatePermissionDto } from './create-permission.dto';

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {

  @ApiProperty()
  @IsString()
  name?: string

  @ApiProperty()
  @IsString()
  description?: string

  @ApiProperty()
  slug?: string

}
