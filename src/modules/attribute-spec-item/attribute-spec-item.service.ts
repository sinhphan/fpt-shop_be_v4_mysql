import { Injectable } from '@nestjs/common';
import { CreateAttributeSpecItemDto } from './dto/create-attribute-spec-item.dto';
import { UpdateAttributeSpecItemDto } from './dto/update-attribute-spec-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AttributeSpecItem } from './entities/attribute-spec-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttributeSpecItemService {
  constructor(
    @InjectRepository(AttributeSpecItem)
    attributeSpecItemRepository: Repository<AttributeSpecItem>,
  ) {}

  create(createAttributeSpecItemDto: CreateAttributeSpecItemDto) {
    return 'This action adds a new attributeSpecItem';
  }

  findAll() {
    return `This action returns all attributeSpecItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeSpecItem`;
  }

  update(id: number, updateAttributeSpecItemDto: UpdateAttributeSpecItemDto) {
    return `This action updates a #${id} attributeSpecItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeSpecItem`;
  }
}
