import { Injectable } from '@nestjs/common';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductVariant } from './entities/product-variant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductVariantService {
  constructor(
    @InjectRepository(ProductVariant)
    productVariantRepository: Repository<ProductVariant>,
  ) {}

  create(createProductVariantDto: CreateProductVariantDto) {
    return 'This action adds a new productVariant';
  }

  findAll() {
    return `This action returns all productVariant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productVariant`;
  }

  update(id: number, updateProductVariantDto: UpdateProductVariantDto) {
    return `This action updates a #${id} productVariant`;
  }

  remove(id: number) {
    return `This action removes a #${id} productVariant`;
  }
}
