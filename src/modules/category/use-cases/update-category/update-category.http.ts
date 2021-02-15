import { routes } from "@infra/configs/app.routes";
import CategoryService from "@modules/category/category.service";
import { UpdateCategoryDto } from "@modules/category/dtos/update-category.dto";
import { Category } from "@modules/category/entities/category.entity";
import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";

@Controller()
export class UpdateCategoryByIdHttpController {

  constructor(private readonly categoryService: CategoryService) {}

  @Put(routes.category.update)
  @ApiBody( { type: UpdateCategoryDto })
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoryService.update(id, updateCategoryDto);
  }
}
