import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { PublisherModule } from './publisher/publisher.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
@Module({
  imports: [TypeOrmModule.forRoot(), CategoryModule, PublisherModule, AuthorsModule, BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
