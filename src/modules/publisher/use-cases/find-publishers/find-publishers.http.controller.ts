import { routes } from "@infra/configs/app.routes";
import { Publisher } from "@modules/publisher/entities/publisher.entity";
import { PublisherService } from "@modules/publisher/publisher.service";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class FindPublishersHttpController {

  constructor(private readonly publisherService: PublisherService) {}

  @Get(routes.publisher.root)
  async findAll(): Promise<Publisher[]> {
    return this.publisherService.findAll();
  }
}
