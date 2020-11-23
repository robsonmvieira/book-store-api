import { Author } from "src/authors/entities/author.entity";
import { Base } from "src/crosscutting/base.entity";
import { Publisher } from "src/publisher/entities/publisher.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";

@Entity('books')
export class Book extends Base{

  @Column()
  name: string

  @Column()
  pages: number

  @Column()
  ISBN_10: string

  @Column()
  ISBN_13: string

  @Column()
  publisher_id: string

  @ManyToOne(() => Publisher, publisher => publisher.books)
  publisher: Publisher

  @ManyToMany(() => Author, authors => authors.books)
  authors: Author[]

}
