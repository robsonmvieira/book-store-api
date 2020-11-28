
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../infra/BaseService.service'
import { Category } from './entities/category.entity'
@Injectable()
export default class CategoryService extends BaseService<Category> {

  constructor(@InjectRepository(Category) resource: Repository<Category>) {
    super(resource)
  }
}
