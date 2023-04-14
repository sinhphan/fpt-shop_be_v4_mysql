import { Module } from '@nestjs/common';
import { AttributeSpecItemService } from './attribute-spec-item.service';
import { AttributeSpecItemController } from './attribute-spec-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeSpecItem } from './entities/attribute-spec-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeSpecItem])],
  controllers: [AttributeSpecItemController],
  providers: [AttributeSpecItemService],
  exports: [AttributeSpecItemService],
})
export class AttributeSpecItemModule {}
