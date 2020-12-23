import { Book } from '@modules/books/entities/book.entity';
import { Publisher } from '@modules/publisher/entities/publisher.entity';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {

  @ApiProperty()
  @IsString()
  name?: string

  @ApiProperty()
  @IsEmail()
  email?: string

  @ApiProperty()
  @IsString()
  publisher_id?: string

  @ApiProperty()
  books?: Book[]

  @ApiProperty()
  publisher?: Publisher
}
