// import { Base } from '@cross/base.entity';
// import { Base } from '@cross/base.entity'

import { Column, Entity, OneToMany } from "typeorm"
// import { Book } from "@modules/books/entities/book.entity"
import { Author } from "../../authors/entities/author.entity"
import { Base } from "../../../crosscutting/base.entity"
import { Book } from '../../books/entities/book.entity'

@Entity('publishers')
export class Publisher extends Base {

  @Column()
  name: string

  @Column()
  web_site: string

  @Column()
  email: string

  @OneToMany(() => Book, books => books.publisher)
  books?: Book[]

  @OneToMany(() => Book, books => books.authors)
  authors?: Author[]

}
