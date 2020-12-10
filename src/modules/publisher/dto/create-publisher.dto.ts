import { Author } from './../../authors/entities/author.entity';
import { Book } from './../../books/entities/book.entity';
import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class CreatePublisherDto {

  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar um nome para a editora'})
  name: string

  @ApiProperty()
  @IsString({message: 'O Tipo de dado não aceito. Aceito apenas caracteres Alpha'})
  @IsNotEmpty({message: 'Esse campo não pode estar vazio'})
  web_site: string

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({message: 'Esse campo não pode estar vazio'})
  email: string

  @ApiProperty()
  books?: Book[]

  @ApiProperty()
  authors?: Author[]
}
