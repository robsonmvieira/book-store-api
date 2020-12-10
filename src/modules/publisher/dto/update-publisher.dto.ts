import { Author } from '@modules/authors/entities/author.entity';
import { Book } from '@modules/books/entities/book.entity';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { CreatePublisherDto } from './create-publisher.dto';

export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {


  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar um nome para a editora'})
  name?: string

  @ApiProperty()
  @IsString({message: 'O Tipo de dado não aceito. Aceito apenas caracteres Alpha'})
  @IsNotEmpty({message: 'Esse campo não pode estar vazio'})
  web_site?: string

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({message: 'Esse campo não pode estar vazio'})
  email?: string

  @ApiProperty()
  books?: Book[]

  @ApiProperty()
  authors?: Author[]
}
