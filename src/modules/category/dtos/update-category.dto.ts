import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import CreateCategoryDto  from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {

  @ApiProperty()
  @IsString()
  @IsNotEmpty({message: 'O Nome da Categoria é Obrigatório'})
  name: string
}
