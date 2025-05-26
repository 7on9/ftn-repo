import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sell_your_tickets", { schema: "ftn_db_main" })
export class SellYourTickets {
  @PrimaryGeneratedColumn({ type: "int", name: "sell_id", unsigned: true })
  sellId: number;

  @Column("varchar", { name: "first_name", nullable: true, length: 255 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 255 })
  lastName: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 255 })
  company: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "mobile", nullable: true, length: 255 })
  mobile: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("varchar", { name: "event_name", nullable: true, length: 255 })
  eventName: string | null;

  @Column("int", {
    name: "event_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventDate: number | null;

  @Column("smallint", {
    name: "quantity",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  quantity: number | null;

  @Column("float", {
    name: "face_value",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  faceValue: number | null;

  @Column("float", {
    name: "price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  price: number | null;

  @Column("varchar", { name: "block", nullable: true, length: 255 })
  block: string | null;

  @Column("varchar", { name: "row", nullable: true, length: 255 })
  row: string | null;

  @Column("varchar", { name: "seat", nullable: true, length: 255 })
  seat: string | null;

  @Column("mediumtext", { name: "comment", nullable: true })
  comment: string | null;

  @Column("tinyint", {
    name: "permanent_supplier_checked",
    unsigned: true,
    default: () => "'0'",
  })
  permanentSupplierChecked: number;

  @Column("text", { name: "permanent_supplier_text", nullable: true })
  permanentSupplierText: string | null;

  @Column("int", {
    name: "timestamp",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  timestamp: number | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 255 })
  ipAddress: string | null;

  @Column("tinyint", {
    name: "email_sent",
    unsigned: true,
    default: () => "'0'",
  })
  emailSent: number;

  @Column("varchar", { name: "face_value_curr", nullable: true, length: 4 })
  faceValueCurr: string | null;

  @Column("varchar", { name: "price_curr", nullable: true, length: 4 })
  priceCurr: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
