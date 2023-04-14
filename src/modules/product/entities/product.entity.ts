import { AttributeSpecItem } from 'src/modules/attribute-spec-item/entities/attribute-spec-item.entity';
import { ProductVariant } from 'src/modules/product-variant/entities/product-variant.entity';
import { Promotion } from 'src/modules/promotion/entities/promotion.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brandName: string;

  @Column()
  nameAscii: string;

  @Column()
  urlPicture: string;

  @Column()
  labelInst: string;

  @Column()
  labelFlashSale: string;

  @OneToOne(
    (type) => ProductVariant,
    (productVariant) => productVariant.productID,
  )
  productVariantID: ProductVariant;

  @OneToMany(
    (type) => AttributeSpecItem,
    (attributeSpecItem) => attributeSpecItem.productID,
  )
  attributeSpecItemIDs: AttributeSpecItem[];

  @OneToMany((type) => Promotion, (promotion) => promotion.productID)
  promotionIDs: Promotion[];
}
