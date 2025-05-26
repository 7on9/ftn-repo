import { Column, Entity } from "typeorm";

@Entity("exchange_suppliers", { schema: "ftn_db_main" })
export class ExchangeSuppliers {
  @Column("int", { primary: true, name: "supplier_id", unsigned: true })
  supplierId: number;

  @Column("double", {
    name: "commission_precentage",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  commissionPrecentage: number | null;

  @Column("float", {
    name: "discount_percentage",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  discountPercentage: number | null;

  @Column("tinyint", {
    name: "is_overdraft",
    nullable: true,
    default: () => "'0'",
  })
  isOverdraft: number | null;

  @Column("tinyint", {
    name: "receive_price_update_email",
    nullable: true,
    width: 1,
  })
  receivePriceUpdateEmail: boolean | null;
}
