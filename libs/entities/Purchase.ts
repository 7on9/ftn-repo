import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_id", ["eventId", "supplierId"], {})
@Index("category_id", ["categoryId"], {})
@Index("member_card", ["memberCard"], {})
@Index("date_update", ["dateUpdate"], {})
@Index("source", ["source"], {})
@Index("idx_supplier_id", ["supplierId"], {})
@Index("purchase_supplier_id", ["supplierId"], {})
@Entity("purchase", { schema: "ftn_db_main" })
export class Purchase {
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

  @Column("int", {
    name: "category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  categoryId: number | null;

  @Column("varchar", { name: "comment", nullable: true, length: 128 })
  comment: string | null;

  @Column("text", { name: "block", nullable: true })
  block: string | null;

  @Column("varchar", { name: "row", nullable: true, length: 50 })
  row: string | null;

  @Column("varchar", { name: "seat_from", nullable: true, length: 16 })
  seatFrom: string | null;

  @Column("varchar", { name: "seat_to", nullable: true, length: 16 })
  seatTo: string | null;

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
    name: "face_value",
    nullable: true,
    precision: 7,
    scale: 2,
    default: () => "'0.00'",
  })
  faceValue: number | null;

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
    name: "member_card",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  memberCard: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 32 })
  type: string | null;

  @Column("int", {
    name: "date_purchase",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  datePurchase: number | null;

  @Column("int", {
    name: "date_update",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateUpdate: number | null;

  @Column("int", { name: "applied", nullable: true, default: () => "'0'" })
  applied: number | null;

  @Column("varchar", { name: "merge_selector", nullable: true, length: 8 })
  mergeSelector: string | null;

  @Column("tinyint", { name: "sold_already", nullable: true, width: 1 })
  soldAlready: boolean | null;

  @Column("tinyint", { name: "downloaded", nullable: true, width: 1 })
  downloaded: boolean | null;

  @Column("tinyint", {
    name: "payment_requested",
    nullable: true,
    default: () => "'0'",
  })
  paymentRequested: number | null;

  @Column("varchar", { name: "source", nullable: true, length: 16 })
  source: string | null;

  @Column("int", { name: "ftl", nullable: true, default: () => "'0'" })
  ftl: number | null;

  @Column("int", {
    name: "ftl_purchase_id",
    nullable: true,
    default: () => "'0'",
  })
  ftlPurchaseId: number | null;

  @Column("int", {
    name: "inputed_purchase_date",
    nullable: true,
    default: () => "'0'",
  })
  inputedPurchaseDate: number | null;

  @Column("int", {
    name: "purchase_email_id",
    nullable: true,
    default: () => "'0'",
  })
  purchaseEmailId: number | null;

  @Column("varchar", { name: "website_source", nullable: true, length: 128 })
  websiteSource: string | null;
}
