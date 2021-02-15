import { routes } from "@infra/configs/app.routes";
import CategoryService from "@modules/category/category.service";
import CreateCategoryDto from "@modules/category/dtos/create-category.dto";
import { Category } from "@modules/category/entities/category.entity";
import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";

@Controller()
export class CreateCategoryHttpController {

  constructor(private readonly categoryService: CategoryService) {}

  @Post(routes.category.root)
  @ApiBody({ type: CreateCategoryDto })
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }
}
