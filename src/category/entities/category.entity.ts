import { Base } from 'src/crosscutting/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('categories')
export default class Category extends Base {

  @Column()
  name: string

}
