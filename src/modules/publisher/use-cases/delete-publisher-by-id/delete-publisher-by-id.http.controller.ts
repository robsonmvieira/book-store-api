import { PublisherService } from './../../publisher.service';
import { Controller, Delete, HttpStatus, Param } from "@nestjs/common";
import { routes } from '@infra/configs/app.routes';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class DeletePublisherByIdHttpController {

  constructor(private readonly publisherService: PublisherService) {}


  @Delete(routes.publisher.remove)
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.OK
  })
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.publisherService.remove(id);
  }
}
