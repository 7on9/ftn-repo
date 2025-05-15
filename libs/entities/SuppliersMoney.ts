import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("purchase_id", ["purchaseId"], {})
@Entity("suppliers_money", { schema: "ftn_db_main" })
export class SuppliersMoney {
  @PrimaryGeneratedColumn({ type: "int", name: "money_id", unsigned: true })
  moneyId: number;

  @Column("int", {
    name: "user_inserted",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  userInserted: number | null;

  @Column("int", {
    name: "date_inserted",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateInserted: number | null;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("float", {
    name: "amount_inserted",
    nullable: true,
    precision: 12,
    scale: 2,
    default: () => "'0.00'",
  })
  amountInserted: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 16 })
  currency: string | null;

  @Column("varchar", { name: "payment_method", nullable: true, length: 128 })
  paymentMethod: string | null;

  @Column("varchar", { name: "extra", nullable: true, length: 1024 })
  extra: string | null;

  @Column("int", {
    name: "date_paid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  datePaid: number | null;

  @Column("int", {
    name: "purchase_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  purchaseId: number | null;

  @Column("int", { name: "ftl_money_id", nullable: true, default: () => "'0'" })
  ftlMoneyId: number | null;

  @Column("int", {
    name: "ftl_purchase_id",
    nullable: true,
    default: () => "'0'",
  })
  ftlPurchaseId: number | null;
}
