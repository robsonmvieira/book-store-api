import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    MulterModule.register({ dest: './uploads'})
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
