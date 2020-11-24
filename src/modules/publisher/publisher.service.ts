import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { BaseService }from '@infra/BaseService.service'
// import { BaseService } from '@infra/BaseService.service';
import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities/publisher.entity';
import { BaseService } from '../../infra/BaseService.service'

@Injectable()
export class PublisherService extends BaseService<Publisher> {

  constructor (@InjectRepository(Publisher) protected resource: Repository<Publisher> ) {
    super(resource)
  }
  create(createPublisherDto: CreatePublisherDto) {
    return 'This action adds a new publisher';
  }

  findOne(id: number) {
    return `This action returns a #${id} publisher`;
  }

  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return `This action updates a #${id} publisher`;
  }

  remove(id: number) {
    return `This action removes a #${id} publisher`;
  }
}

// @Injectable()
// export class PublisherService {

//   constructor (@InjectRepository(Publisher) protected resource: Repository<Publisher> ) {}
//   create(createPublisherDto: CreatePublisherDto) {
//     return 'This action adds a new publisher';
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} publisher`;
//   }

//   update(id: number, updatePublisherDto: UpdatePublisherDto) {
//     return `This action updates a #${id} publisher`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} publisher`;
//   }
// }
