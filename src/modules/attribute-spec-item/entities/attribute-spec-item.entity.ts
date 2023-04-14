import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AttributeSpecItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  attributeID: number;

  @Column()
  attributeName: string;

  @Column()
  specName: string;

  @Column()
  cssClass: string;

  @ManyToOne((type) => Product, (product) => product.attributeSpecItemIDs)
  productID: Product;
}
