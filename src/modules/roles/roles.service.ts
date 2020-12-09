import {BaseService} from '../../infra/BaseService.service'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { Permission } from '../permissions/entities/permission.entity'

@Injectable()
export class RolesService extends BaseService<Role> {
  constructor(@InjectRepository(Role) protected resource: Repository<Role>,
  @InjectRepository(Permission) protected  permissionRepository: Repository<Permission>) {
    super(resource)
  }

  async create(data: CreateRoleDto): Promise<Role> {
    const { permissions } = data
    const newRole = { name: data.name, description: data.description, slug: data.slug, permissions: [] }
      for (const perm of permissions) {
        const tmp = await this.permissionRepository.findOne(perm)
        newRole.permissions.push(tmp)
      }
    return this.resource.save(newRole)
  }
}
