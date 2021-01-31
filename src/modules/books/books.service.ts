import { BaseService } from '@infra/BaseService.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService extends BaseService<Book> {

  constructor(@InjectRepository(Book) protected resource: Repository<Book>) {
    super(resource);
  }

}
