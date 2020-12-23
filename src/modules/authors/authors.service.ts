import { BaseService } from '../../infra/BaseService.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publisher } from '../publisher/entities/publisher.entity';

@Injectable()
export class AuthorsService extends BaseService<Author> {

  constructor(
    @InjectRepository(Author) protected resource: Repository<Author>,
    @InjectRepository(Publisher) protected publisherRepo: Repository<Publisher>) {
    super(resource);
  }

  async create(data: CreateAuthorDto): Promise<Author> {
    const { publisher_id } = data

    const publisher = await this.publisherRepo.findOne(publisher_id)
    if(!publisher) {
      throw new BadRequestException('A editora informada não existe!')
    }

    data.publisher = publisher

    return this.resource.save(data)
  }
}
