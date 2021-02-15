import { routes } from "@infra/configs/app.routes";
import CategoryService from "@modules/category/category.service";
import { Controller, Delete, Param } from "@nestjs/common";

@Controller()
export class DeleteCategoryByIdHttpController {

  constructor(private readonly categoryService: CategoryService) {}

  @Delete(routes.category.remove)
  async remove(@Param('id') id: string):Promise<boolean>{
    return this.categoryService.remove(id);
  }
}
