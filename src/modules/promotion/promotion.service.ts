import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Promotion } from './entities/promotion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromotionService {
  constructor(
    @InjectRepository(Promotion) promotionRepository: Repository<Promotion>,
  ) {}

  create(createPromotionDto: CreatePromotionDto) {
    return 'This action adds a new promotion';
  }

  findAll() {
    return `This action returns all promotion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promotion`;
  }

  update(id: number, updatePromotionDto: UpdatePromotionDto) {
    return `This action updates a #${id} promotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }
}
