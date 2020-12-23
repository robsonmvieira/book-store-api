import { Base } from "../../../crosscutting/base.entity"

// import { Base } from'@cross/base.entity'
import { Author } from "../../authors/entities/author.entity";
import { Publisher } from "../../publisher/entities/publisher.entity";
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

  @ManyToOne(() => Author, authors => authors.books)
  authors: Author[]

}
