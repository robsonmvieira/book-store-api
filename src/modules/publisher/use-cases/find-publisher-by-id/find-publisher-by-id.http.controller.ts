import { PublisherService } from './../../publisher.service';
import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { Publisher } from '@modules/publisher/entities/publisher.entity';
import { routes } from '@infra/configs/app.routes';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class FindPublisherByIdHttpController {

  constructor(private readonly publisherService: PublisherService) {}


  @Get(routes.publisher.findOne)
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.OK
  })
  async findOne(@Param('id') id: string): Promise<Publisher> {
    return this.publisherService.findOne(id);
  }
}
