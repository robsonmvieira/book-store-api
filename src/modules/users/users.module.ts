import { Encrypter } from '../../utils/encrypter/inplementation/encrypter';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../roles/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, ])],
  controllers: [UsersController],
  providers: [UsersService, Encrypter]
})
export class UsersModule {}
