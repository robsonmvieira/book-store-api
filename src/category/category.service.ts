import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import  CreateCategoryDto  from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import Category from './entities/category.entity'
@Injectable()
export default class CategoryService {

  constructor(@InjectRepository(Category) private resource: Repository<Category>) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
     const newCategory = await this.resource.save(createCategoryDto)

     if (!newCategory) {
       throw new InternalServerErrorException('ocorreu um erro interno. Por favor tente mais tarde')
     }

     return newCategory
  }

  async findAll(): Promise<Category[]> {
    return await this.resource.find();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.resource.findOne(String(id))

    if(!category) {
      throw new  NotFoundException("Category not Found")
    }
    return category
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.resource.findOne(String(id))

    if(!category) {
      throw new NotFoundException('Category Not Found')
    }

    await this.resource.update(id, updateCategoryDto)

    const updatedCategory = Object.assign({...category, ...updateCategoryDto})

    return updatedCategory
  }

  async remove(id: number): Promise<boolean> {

    const result  = await this.resource.delete(String(id))

    if(!result) {
      throw new NotFoundException('category not found')
    }
    return true
  }
}
