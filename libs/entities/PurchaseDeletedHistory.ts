import { Column, Entity, Index } from "typeorm";

@Index("id", ["id"], {})
@Entity("purchase_deleted_history", { schema: "ftn_db_main" })
export class PurchaseDeletedHistory {
  @Column("int", { name: "id", nullable: true, default: () => "'0'" })
  id: number | null;

  @Column("int", {
    name: "user_inserted",
    nullable: true,
    default: () => "'0'",
  })
  userInserted: number | null;

  @Column("int", { name: "deleted_time", nullable: true, default: () => "'0'" })
  deletedTime: number | null;

  @Column("int", { name: "admin_id", nullable: true, default: () => "'0'" })
  adminId: number | null;

  @Column("int", { name: "event_id", nullable: true, default: () => "'0'" })
  eventId: number | null;

  @Column("int", { name: "event_date", nullable: true, default: () => "'0'" })
  eventDate: number | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("int", { name: "category_id", nullable: true, default: () => "'0'" })
  categoryId: number | null;

  @Column("varchar", { name: "block", nullable: true, length: 255 })
  block: string | null;

  @Column("varchar", { name: "row", nullable: true, length: 255 })
  row: string | null;

  @Column("varchar", { name: "seats", nullable: true, length: 255 })
  seats: string | null;

  @Column("float", {
    name: "face_value",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  faceValue: number | null;

  @Column("int", { name: "quantity", nullable: true, default: () => "'0'" })
  quantity: number | null;

  @Column("float", {
    name: "price",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  price: number | null;

  @Column("float", {
    name: "total",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  total: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 50 })
  currency: string | null;

  @Column("int", { name: "supplier_id", nullable: true, default: () => "'0'" })
  supplierId: number | null;

  @Column("int", {
    name: "date_purchased",
    nullable: true,
    default: () => "'0'",
  })
  datePurchased: number | null;
}
