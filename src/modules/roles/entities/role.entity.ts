import { User } from './../../users/entities/user.entity';
import { Permission } from './../../permissions/entities/permission.entity';

import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Base } from '../../../crosscutting/base.entity'

@Entity('roles')
export class Role extends Base {

  @Column()
  name: string

  @Column()
  description?: string

  @Column()
  slug?: string
  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[]

  @ManyToMany(() => User)
  @JoinTable()
  users: User[]

}
