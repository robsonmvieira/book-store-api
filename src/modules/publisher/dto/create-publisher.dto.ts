import { Author } from './../../authors/entities/author.entity';
import { Book } from './../../books/entities/book.entity';
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreatePublisherDto {
  @IsNotEmpty({message: 'Você precisa informar um nome para a editora'})
  name: string

  @IsString({message: 'O Tipo de dado não aceito. Aceito apenas caracteres Alpha'})
  @IsNotEmpty({message: 'Esse campo não pode estar vazio'})
  web_site: string

  @IsEmail()
  @IsNotEmpty({message: 'Esse campo não pode estar vazio'})
  email: string


  books?: Book[]


  authors?: Author[]
}
