import { Author } from "src/authors/entities/author.entity"
import { Book } from "src/books/entities/book.entity"
import { Base } from "src/crosscutting/base.entity"
import { Column, Entity, OneToMany } from "typeorm"

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
