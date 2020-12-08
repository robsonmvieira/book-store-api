import { Role } from "@modules/roles/entities/role.entity";

import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

import { Base } from '../../../crosscutting/base.entity'

@Entity('users')
export class User extends Base {

  @Column()
  name: string

  @Column()
  email: string


  @Column()
  class: string

  @Column()
  semester: number

  @Column()
  password: string

  @Column()
  course: string

  @Column()
  profile: string

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[]

}
