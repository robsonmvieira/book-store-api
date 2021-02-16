import { routes } from "@infra/configs/app.routes";
import { CreatePublisherDto } from "@modules/publisher/dto/create-publisher.dto";
import { Publisher } from "@modules/publisher/entities/publisher.entity";
import { PublisherService } from "@modules/publisher/publisher.service";
import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

@Controller()
export class CreatePublishersHttpController {

  constructor(private readonly publisherService: PublisherService) {}

  @Post(routes.publisher.root)

  @ApiResponse({
    status: HttpStatus.BAD_REQUEST
  })

  @ApiResponse({
    status: HttpStatus.CREATED
  })
  async create(@Body() createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    return this.publisherService.create(createPublisherDto);
  }
}
