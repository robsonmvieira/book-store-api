import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [TypeOrmModule.forRoot(), CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
