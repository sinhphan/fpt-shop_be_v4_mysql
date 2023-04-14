import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { AttributeSpecItemModule } from './modules/attribute-spec-item/attribute-spec-item.module';
import { PromotionModule } from './modules/promotion/promotion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVariantModule } from './modules/product-variant/product-variant.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sinh',
      password: 'SinhLAa3@',
      database: 'fpt_shop',
      entities: ['./modules/**/entities/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
    AttributeSpecItemModule,
    PromotionModule,
    ProductVariantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
