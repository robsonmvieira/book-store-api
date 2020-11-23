import { Book } from "src/books/entities/book.entity";
import { Base } from "src/crosscutting/base.entity";
import { Publisher } from "src/publisher/entities/publisher.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";

@Entity('authors')
export class Author extends Base{

  @Column()
  name: string

  @Column()
  email: string


  @Column()
  publisher_id: string

  @ManyToMany(() => Book, books => books.authors)
  books?: string

  @ManyToOne(() => Publisher, publisher => publisher.authors)
  publisher: Publisher



}
