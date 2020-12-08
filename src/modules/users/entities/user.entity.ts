import { Column, Entity } from "typeorm";
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

  role:

  // @ManyToMany(() => Book, books => books.authors)
  // books?: string

  // @ManyToOne(() => Publisher, publisher => publisher.authors)
  // publisher: Publisher

}
