import {BaseService} from '../../infra/BaseService.service'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService extends BaseService<Role> {
  constructor(@InjectRepository(Role) resource: Repository<Role>) {
    super(resource)
  }
}
