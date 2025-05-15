import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("delivery_options", { schema: "ftn_db_main" })
export class DeliveryOptions {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "delivery_option_id",
    unsigned: true,
  })
  deliveryOptionId: number;

  @Column("varchar", {
    name: "delivery_option_name",
    nullable: true,
    length: 254,
  })
  deliveryOptionName: string | null;

  @Column("varchar", {
    name: "delivery_option_name_es",
    nullable: true,
    length: 254,
  })
  deliveryOptionNameEs: string | null;

  @Column("varchar", {
    name: "delivery_option_name_dk",
    nullable: true,
    length: 254,
  })
  deliveryOptionNameDk: string | null;

  @Column("varchar", {
    name: "delivery_option_name_se",
    nullable: true,
    length: 254,
  })
  deliveryOptionNameSe: string | null;

  @Column("varchar", {
    name: "delivery_option_name_fi",
    nullable: true,
    length: 254,
  })
  deliveryOptionNameFi: string | null;

  @Column("varchar", {
    name: "delivery_option_name_nl",
    nullable: true,
    length: 254,
  })
  deliveryOptionNameNl: string | null;

  @Column("varchar", {
    name: "delivery_option_name_it",
    nullable: true,
    length: 254,
  })
  deliveryOptionNameIt: string | null;

  @Column("varchar", {
    name: "delivery_option_name_de",
    nullable: true,
    length: 254,
  })
  deliveryOptionNameDe: string | null;

  @Column("varchar", {
    name: "delivery_option_name_fr",
    nullable: true,
    length: 254,
  })
  deliveryOptionNameFr: string | null;

  @Column("float", {
    name: "delivery_option_price",
    unsigned: true,
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  deliveryOptionPrice: number;

  @Column("varchar", {
    name: "delivery_option_rate",
    nullable: true,
    length: 12,
  })
  deliveryOptionRate: string | null;
}
