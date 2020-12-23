import { Book } from "@modules/books/entities/book.entity"
import { Publisher } from "@modules/publisher/entities/publisher.entity"
import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class CreateAuthorDto {

  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar um nome para o autor'})
  @MinLength(3)
  name: string

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({message: 'O email não pode estar vazio'})
  email: string

  @ApiProperty()
  @IsNotEmpty({message: 'O id da editora não pode estar vazio'})
  publisher_id: string

  @ApiProperty()
  books?: Book[]

  @ApiProperty()
  @IsNotEmpty({message: 'O author precisar estar vinculado a uma editora'})
  publisher: Publisher

}
