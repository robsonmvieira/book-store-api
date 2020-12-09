import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../roles/entities/role.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { BaseService } from '../../infra/BaseService.service'
import { BadRequestException, Injectable } from '@nestjs/common';
import { Encrypter } from '../../utils/encrypter/inplementation/encrypter';

@Injectable()
export class UsersService extends BaseService<User> {

  constructor(
    @InjectRepository(User) protected resource: Repository<User>,
    @InjectRepository(Role) protected roleRepo: Repository<Role>,
    protected encrypter: Encrypter) {
    super(resource)
  }


  async create(data: CreateUserDto): Promise<User> {
    const { password, roles } = data
    data.password = await this.encrypter.encrypt(password)
    const newUser = Object.assign({}, data, { roles: [] })

    if(roles.length === 0) {
      throw new BadRequestException('Você não pode salvar um usuário sem ao menos um perfil')
    }
    for (const role of data.roles) {
        const tmp = await this.roleRepo.findOne(role)
        newUser.roles.push(tmp)
    }

    return this.resource.save(newUser)
  }
}
