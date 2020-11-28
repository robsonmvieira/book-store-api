import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import  CategoryService  from './category.service';
import  CreateCategoryDto  from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export default class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findOne(String(id));
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoryService.update(String(id), updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number):Promise<boolean>{
    return this.categoryService.remove(String(id));
  }
}
