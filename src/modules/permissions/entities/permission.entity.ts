import { Role } from '@modules/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Base } from '../../../crosscutting/base.entity'

@Entity('permissions')
export class Permission extends Base {

  @Column()
  name: string

  @Column()
  description?: string

  @Column()
  slug?: string

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[]


}
