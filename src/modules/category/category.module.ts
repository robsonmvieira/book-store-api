import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import CategoryService  from './category.service';
import  CategoryController  from './category.controller';
import  { Category }  from './entities/category.entity';
import { FindCategoriesHttpController } from './use-cases/find-categories/find-categories.http.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category])
  ],
  controllers: [CategoryController, FindCategoriesHttpController],
  providers: [CategoryService]
})
export class CategoryModule {}
