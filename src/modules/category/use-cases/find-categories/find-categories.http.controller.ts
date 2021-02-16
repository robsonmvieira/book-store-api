import { routes } from "@infra/configs/app.routes";
import CategoryService from "@modules/category/category.service";
import { Category } from "@modules/category/entities/category.entity";
import { Controller, Get, HttpStatus } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

@Controller()
export class FindCategoriesHttpController {

  constructor(private readonly categoryService: CategoryService) {}

  @Get(routes.category.root)
  @ApiResponse({
    status: HttpStatus.SERVICE_UNAVAILABLE
  })
  @ApiResponse({
    status: HttpStatus.OK
  })
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }
}
