import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import CategoryService  from './category.service';
import  { Category }  from './entities/category.entity';
import { FindCategoriesHttpController } from './use-cases/find-categories/find-categories.http.controller';
import { FindCategoryByIdHttpController } from './use-cases/find-category-by-id/find-category-by-id.http.controller';
import { DeleteCategoryByIdHttpController } from './use-cases/delete-category/delete-category-by-id.http.controller';
import { CreateCategoryHttpController } from './use-cases/create-category/create-category.http';
import { UpdateCategoryByIdHttpController } from './use-cases/update-category/update-category.http';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category])
  ],
  controllers: [
    CreateCategoryHttpController,
    FindCategoriesHttpController,
    FindCategoryByIdHttpController,
    DeleteCategoryByIdHttpController,
    UpdateCategoryByIdHttpController,
  ],
  providers: [CategoryService]
})
export class CategoryModule {}
