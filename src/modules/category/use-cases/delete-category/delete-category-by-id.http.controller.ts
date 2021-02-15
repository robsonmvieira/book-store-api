import { routes } from "@infra/configs/app.routes";
import CategoryService from "@modules/category/category.service";
import { Controller, Get, Param } from "@nestjs/common";

@Controller()
export class DeleteCategoryByIdHttpController {

  constructor(private readonly categoryService: CategoryService) {}

  @Get(routes.category.findOne)
  async remove(@Param('id') id: string):Promise<boolean>{
    return this.categoryService.remove(id);
  }
}
