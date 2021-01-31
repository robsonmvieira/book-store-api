import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './modules/authors/authors.module';
import { BooksModule } from './modules/books/books.module';
import { CategoryModule } from './modules/category/category.module';
import { PublisherModule } from './modules/publisher/publisher.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot( { rootPath: join(__dirname, '..', './uploads')}),
    CategoryModule,
    PublisherModule,
    AuthorsModule,
    BooksModule,
    UsersModule,
    RolesModule,
    PermissionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
