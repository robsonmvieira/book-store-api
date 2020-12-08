import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty } from "class-validator"

export class CreatePermissionDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome da permissão é obrigatório' })
  name: string

  @ApiProperty()
  @IsString()
  description?: string

  @ApiProperty()
  slug?: string

  @ApiProperty()
  roles?: string[]
}
