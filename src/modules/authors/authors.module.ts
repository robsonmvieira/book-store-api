import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Publisher } from '../publisher/entities/publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Publisher])],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
