import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity';
import { FindPublishersHttpController } from './use-cases/find-publishers/find-publishers.http.controller';
import { FindPublisherByIdHttpController } from './use-cases/find-publisher-by-id/find-publisher-by-id.http.controller';
import { DeletePublisherByIdHttpController } from './use-cases/delete-publisher-by-id/delete-publisher-by-id.http.controller';
import { UpdatePublisherByIdHttpController } from './use-cases/update-publisher-by-id/update-publisher-by-id.http.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  controllers: [
    FindPublishersHttpController,
    FindPublisherByIdHttpController,
    DeletePublisherByIdHttpController,
    UpdatePublisherByIdHttpController,
    PublisherController
  ],
  providers: [PublisherService]
})
export class PublisherModule {}
