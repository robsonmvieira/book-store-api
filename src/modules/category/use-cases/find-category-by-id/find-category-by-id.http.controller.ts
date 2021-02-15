import { routes } from "@infra/configs/app.routes";
import CategoryService from "@modules/category/category.service";
import { Category } from "@modules/category/entities/category.entity";
import { Controller, Get, Param } from "@nestjs/common";

@Controller()
export class FindCategoryByIdHttpController {

  constructor(private readonly categoryService: CategoryService) {}

  @Get(routes.category.findOne)
  async findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }
}
