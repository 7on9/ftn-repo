import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_id", ["eventId", "supplierId"], {})
@Entity("stadium_tours_purchase", { schema: "ftn_db_main" })
export class StadiumToursPurchase {
  @PrimaryGeneratedColumn({ type: "int", name: "purchase_id", unsigned: true })
  purchaseId: number;

  @Column("int", {
    name: "user_inserted",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  userInserted: number | null;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("int", { name: "category_id", nullable: true, default: () => "'0'" })
  categoryId: number | null;

  @Column("int", {
    name: "quantity",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  quantity: number | null;

  @Column("float", {
    name: "price",
    nullable: true,
    precision: 9,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 16 })
  currency: string | null;

  @Column("float", {
    name: "er_value",
    nullable: true,
    unsigned: true,
    precision: 9,
    scale: 8,
    default: () => "'0.00000000'",
  })
  erValue: number | null;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("int", {
    name: "date_purchase",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  datePurchase: number | null;

  @Column("int", { name: "applied", nullable: true, default: () => "'0'" })
  applied: number | null;
}
