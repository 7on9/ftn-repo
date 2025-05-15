import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("imported_purchases_dm", { schema: "ftn_db_main" })
export class ImportedPurchasesDm {
  @PrimaryGeneratedColumn({ type: "int", name: "purchase_id", unsigned: true })
  purchaseId: number;

  @Column("varchar", { name: "event_name", nullable: true, length: 254 })
  eventName: string | null;

  @Column("int", { name: "event_date", unsigned: true, default: () => "'0'" })
  eventDate: number;

  @Column("int", {
    name: "user_inserted",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  userInserted: number | null;

  @Column("varchar", { name: "email", nullable: true, length: 128 })
  email: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 128 })
  category: string | null;

  @Column("text", { name: "block", nullable: true })
  block: string | null;

  @Column("varchar", { name: "row", nullable: true, length: 16 })
  row: string | null;

  @Column("varchar", { name: "seat_from", nullable: true, length: 16 })
  seatFrom: string | null;

  @Column("varchar", { name: "seat_to", nullable: true, length: 16 })
  seatTo: string | null;

  @Column("float", {
    name: "face_value",
    nullable: true,
    precision: 7,
    scale: 2,
    default: () => "'0.00'",
  })
  faceValue: number | null;

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

  @Column("varchar", { name: "supplier", nullable: true, length: 128 })
  supplier: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 32 })
  type: string | null;

  @Column("varchar", { name: "payment_method", nullable: true, length: 128 })
  paymentMethod: string | null;

  @Column("int", {
    name: "date_purchase",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  datePurchase: number | null;

  @Column("tinyint", { name: "hide", default: () => "'0'" })
  hide: number;
}
