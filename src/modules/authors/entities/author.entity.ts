import { Base } from "../../../crosscutting/base.entity"

import { Book } from '../../books/entities/book.entity'
import { Publisher } from "../../publisher/entities/publisher.entity";

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
