import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Publisher } from './entities/publisher.entity';
import { BaseService } from '../../infra/BaseService.service'

@Injectable()
export class PublisherService extends BaseService<Publisher> {

  constructor (@InjectRepository(Publisher) protected resource: Repository<Publisher> ) {
    super(resource)
  }

}
