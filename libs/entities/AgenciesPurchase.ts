import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_id", ["eventId"], {})
@Index("agency_purchase_agency_id", ["agencyId"], {})
@Index("agencies_purchase_order", ["orderId"], {})
@Entity("agencies_purchase", { schema: "ftn_db_main" })
export class AgenciesPurchase {
  @PrimaryGeneratedColumn({ type: "int", name: "purchase_id", unsigned: true })
  purchaseId: number;

  @Column("int", {
    name: "user_inserted",
    unsigned: true,
    default: () => "'0'",
  })
  userInserted: number;

  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;

  @Column("int", { name: "category_id", unsigned: true, default: () => "'0'" })
  categoryId: number;

  @Column("int", { name: "agency_id", unsigned: true, default: () => "'0'" })
  agencyId: number;

  @Column("varchar", { name: "block", nullable: true, length: 255 })
  block: string | null;

  @Column("int", { name: "quantity", unsigned: true, default: () => "'0'" })
  quantity: number;

  @Column("float", {
    name: "price",
    precision: 9,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number;

  @Column("varchar", { name: "currency", nullable: true, length: 16 })
  currency: string | null;

  @Column("float", {
    name: "er_value",
    unsigned: true,
    precision: 9,
    scale: 8,
    default: () => "'0.00000000'",
  })
  erValue: number;

  @Column("int", {
    name: "date_purchase",
    unsigned: true,
    default: () => "'0'",
  })
  datePurchase: number;

  @Column("tinyint", { name: "payed", width: 1, default: () => "'0'" })
  payed: boolean;

  @Column("varchar", { name: "extra", nullable: true, length: 256 })
  extra: string | null;

  @Column("int", { name: "order_id", unsigned: true, default: () => "'0'" })
  orderId: number;
}
