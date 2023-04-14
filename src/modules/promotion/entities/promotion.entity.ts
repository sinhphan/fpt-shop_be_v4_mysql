import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: string;

  @Column()
  promotionName: string;

  @Column()
  urlPicture: string;

  @Column()
  displayOrder: number;

  @ManyToOne((type) => Product, (product) => product.promotionIDs)
  productID: Product;
}
