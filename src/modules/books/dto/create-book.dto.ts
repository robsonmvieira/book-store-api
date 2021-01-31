import { Author } from "@modules/authors/entities/author.entity"
import { Publisher } from "@modules/publisher/entities/publisher.entity"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MinLength } from "class-validator"

export class CreateBookDto {

  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar o nome para o livro'})
  @MinLength(3)
  name: string

  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar a quantidade de páginas do livro'})
  pages: number

  @IsNotEmpty({message: 'Você precisa informar o número do ISBN 10 do livro'})
  @ApiProperty()
  ISBN_10: string

  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar o número do ISBN 13 do livro'})
  ISBN_13: string

  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar o Id da editora'})
  publisher_id: string

  @ApiProperty()
  publisher: Publisher

  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar uma imagem para o livro.'})
  image: string

  @ApiProperty()
  @IsNotEmpty({message: 'Você precisa informar ao  menos um Id dos autores(as)'})
  authors: Author[]
}
