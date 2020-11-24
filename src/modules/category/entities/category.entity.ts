// import { Base } from 'src/crosscutting/base.entity';
import { Base  }from '../../../crosscutting/base.entity'
import { Entity, Column } from 'typeorm';

@Entity('categories')
export class Category extends Base {

  @Column()
  name: string

}
