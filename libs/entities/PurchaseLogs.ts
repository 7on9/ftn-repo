import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_id", ["eventId", "supplierId"], {})
@Index("category_id", ["categoryId"], {})
@Entity("purchase_logs", { schema: "ftn_db_main" })
export class PurchaseLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("tinyint", { name: "user_purchased", default: () => "'0'" })
  userPurchased: number;

  @Column("int", { name: "timestamp", nullable: true, default: () => "'0'" })
  timestamp: number | null;

  @Column("int", { name: "event_id", nullable: true, default: () => "'0'" })
  eventId: number | null;

  @Column("int", { name: "event_date", nullable: true, default: () => "'0'" })
  eventDate: number | null;

  @Column("int", { name: "category_id", nullable: true, default: () => "'0'" })
  categoryId: number | null;

  @Column("int", { name: "quantity", nullable: true, default: () => "'0'" })
  quantity: number | null;

  @Column("float", {
    name: "price",
    nullable: true,
    precision: 9,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number | null;

  @Column("float", {
    name: "total",
    nullable: true,
    precision: 9,
    scale: 2,
    default: () => "'0.00'",
  })
  total: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 16 })
  currency: string | null;

  @Column("int", { name: "supplier_id", nullable: true, default: () => "'0'" })
  supplierId: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 32 })
  type: string | null;

  @Column("int", {
    name: "date_purchased",
    nullable: true,
    default: () => "'0'",
  })
  datePurchased: number | null;

  @Column("text", { name: "changes", nullable: true })
  changes: string | null;

  @Column("tinyint", { name: "admin_id", default: () => "'0'" })
  adminId: number;

  @Column("varchar", { name: "action", nullable: true, length: 10 })
  action: string | null;
}
