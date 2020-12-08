import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { BaseService } from '../../infra/BaseService.service'
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends BaseService<User> {

  constructor(@InjectRepository(User) resource: Repository<User>) {
    super(resource)
  }
}
