import { BaseService } from '../../infra/BaseService.service'
import { Injectable } from '@nestjs/common';
import { Permission } from './entities/permission.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionsService extends BaseService<Permission> {
  constructor(@InjectRepository(Permission) protected  resource: Repository<Permission>) {
    super(resource)
  }

}
