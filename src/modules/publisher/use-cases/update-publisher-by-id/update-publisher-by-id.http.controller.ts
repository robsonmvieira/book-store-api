import { PublisherService } from './../../publisher.service';
import { Body, Controller, HttpStatus, Param, Put } from "@nestjs/common";
import { routes } from '@infra/configs/app.routes';
import { ApiResponse } from '@nestjs/swagger';
import { UpdatePublisherDto } from '@modules/publisher/dto/update-publisher.dto';
import { Publisher } from '@modules/publisher/entities/publisher.entity';

@Controller()
export class UpdatePublisherByIdHttpController {

  constructor(private readonly publisherService: PublisherService) {}

  @Put(routes.publisher.update)
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.OK
  })
  async update(@Param('id') id: string, @Body() updatePublisherDto: UpdatePublisherDto): Promise<Publisher> {
    return this.publisherService.update(id, updatePublisherDto);
  }
}
