import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity';
import { FindPublisherHttpController } from './use-cases/find-publishers/find-publishers.http.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  controllers: [
    FindPublisherHttpController,
    PublisherController
  ],
  providers: [PublisherService]
})
export class PublisherModule {}
