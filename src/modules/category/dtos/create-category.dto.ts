import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export default class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({message: 'O Nome da Categoria é Obrigatório'})
  name: string
}
