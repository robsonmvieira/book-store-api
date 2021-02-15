import { routes } from "@infra/configs/app.routes";
import CategoryService from "@modules/category/category.service";
import { Category } from "@modules/category/entities/category.entity";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class FindCategoriesHttpController {

  constructor(private readonly categoryService: CategoryService) {}

  @Get(routes.category.root)
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }
}
