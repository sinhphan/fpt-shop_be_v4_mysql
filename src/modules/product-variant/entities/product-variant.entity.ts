import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductVariant {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Product, (product) => product.productVariantID)
  productID: Product;

  @Column()
  sku: string;

  @Column()
  stockQuantity: number;

  @Column()
  price: number;

  @Column()
  priceMarket: number;
}
