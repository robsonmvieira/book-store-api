import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './modules/authors/authors.module';
import { BooksModule } from './modules/books/books.module';
import { CategoryModule } from './modules/category/category.module';
import { PublisherModule } from './modules/publisher/publisher.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
@Module({
  imports: [TypeOrmModule.forRoot(), CategoryModule, PublisherModule, AuthorsModule, BooksModule, UsersModule, RolesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
