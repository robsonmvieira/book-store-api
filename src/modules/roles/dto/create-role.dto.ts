import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty } from "class-validator"

export class CreateRoleDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome da role é obrigatório' })
  name: string

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


