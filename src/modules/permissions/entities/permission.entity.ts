import { Column, Entity } from 'typeorm';
import { Base } from '../../../crosscutting/base.entity'

@Entity('permissions')
export class Permission extends Base {

  @Column()
  name: string

  @Column()
  description?: string

  @Column()
  slug?: string




}
