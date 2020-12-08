import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  async create(@Body() createPermissionDto: CreatePermissionDto): Promise<Permission> {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  async findAll(): Promise<Permission[]> {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Permission> {
    return this.permissionsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto): Promise<Permission> {
    return this.permissionsService.update(id, updatePermissionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.permissionsService.remove(id);
  }
}
