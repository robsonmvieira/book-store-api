import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome do aluno é obrigatório' })
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O email é obrigatório' })
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty( { message: 'A Turma  é obrigatório' })
  class: string

 @ApiProperty()
  @IsNotEmpty({ message: 'O semestre é obrigatório' })
  semester: number

  @ApiProperty()
  @IsNotEmpty({ message: 'A Senha é obrigatório' })
  @MinLength(6)
  password: string

  @ApiProperty()
  @IsNotEmpty({ message: 'O curso é obrigatório' })
  @IsString()
  course: string

  @ApiProperty()
  profile?: string
  @ApiProperty()
  role?: string[]
}
