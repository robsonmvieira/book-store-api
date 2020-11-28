import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities/publisher.entity';

@Controller('publishers')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Post()
  async create(@Body() createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    return this.publisherService.create(createPublisherDto);
  }

  @Get()
  async findAll(): Promise<Publisher[]> {
    return this.publisherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Publisher> {
    return this.publisherService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePublisherDto: UpdatePublisherDto): Promise<Publisher> {
    return this.publisherService.update(id, updatePublisherDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.publisherService.remove(id);
  }
}
