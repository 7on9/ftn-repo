import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("imported_orders_dm", { schema: "ftn_db_main" })
export class ImportedOrdersDm {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "event_name", nullable: true, length: 254 })
  eventName: string | null;

  @Column("int", { name: "event_date", unsigned: true, default: () => "'0'" })
  eventDate: number;

  @Column("int", { name: "quantity", unsigned: true, default: () => "'0'" })
  quantity: number;

  @Column("int", {
    name: "date_purchased",
    unsigned: true,
    default: () => "'0'",
  })
  datePurchased: number;

  @Column("varchar", { name: "venue", nullable: true, length: 254 })
  venue: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 128 })
  city: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 128 })
  country: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 254 })
  category: string | null;

  @Column("int", { name: "order_id", unsigned: true, default: () => "'0'" })
  orderId: number;

  @Column("float", {
    name: "price",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number;

  @Column("varchar", { name: "currency", nullable: true, length: 8 })
  currency: string | null;

  @Column("tinyint", { name: "hide", default: () => "'0'" })
  hide: number;

  @Column("varchar", { name: "website", nullable: true, length: 64 })
  website: string | null;
}
