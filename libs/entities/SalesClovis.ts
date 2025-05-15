import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("main", ["main", "main_2"], {})
@Entity("sales_clovis", { schema: "ftn_db_main" })
export class SalesClovis {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "added_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  addedDate: number | null;

  @Column("int", {
    name: "origin_order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  originOrderId: number | null;

  @Column("varchar", { name: "main", nullable: true, length: 255 })
  main: string | null;

  @Column("varchar", { name: "main_2", nullable: true, length: 255 })
  main_2: string | null;

  @Column("int", {
    name: "quantity",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  quantity: number | null;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("varchar", { name: "category", nullable: true, length: 255 })
  category: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 3 })
  website: string | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("text", { name: "extra", nullable: true })
  extra: string | null;
}
