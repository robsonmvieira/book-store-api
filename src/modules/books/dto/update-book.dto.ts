import { Author } from '@modules/authors/entities/author.entity';
import { Publisher } from '@modules/publisher/entities/publisher.entity';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {

  @ApiProperty()
  name?: string

  @ApiProperty()
  pages?: number

  @ApiProperty()
  ISBN_10?: string

  @ApiProperty()
  ISBN_13?: string

  @ApiProperty()
  publisher_id?: string

  @ApiProperty()
  publisher?: Publisher

  @ApiProperty()
  authors?: Author[]
}
