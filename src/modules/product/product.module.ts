import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { AttributeSpecItemModule } from '../attribute-spec-item/attribute-spec-item.module';
import { PromotionModule } from '../promotion/promotion.module';
import { ProductVariantModule } from '../product-variant/product-variant.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    AttributeSpecItemModule,
    PromotionModule,
    ProductVariantModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
