import { Column, Entity, Index } from "typeorm";

@Index("singles", ["singles"], {})
@Index("category_id", ["categoryId"], {})
@Index("timestamp", ["timestamp"], {})
@Index("price_history_event_id", ["eventId"], {})
@Entity("price_history", { schema: "ftn_db_main" })
export class PriceHistory {
  @Column("varchar", { name: "admin_id", nullable: true, length: 10 })
  adminId: string | null;

  @Column("int", { name: "supplier_id", nullable: true })
  supplierId: number | null;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("int", { name: "category_id", nullable: true, default: () => "'0'" })
  categoryId: number | null;

  @Column("int", { name: "ticket_id", nullable: true })
  ticketId: number | null;

  @Column("tinyint", { name: "singles", width: 1, default: () => "'0'" })
  singles: boolean;

  @Column("varchar", { name: "category", nullable: true, length: 255 })
  category: string | null;

  @Column("float", {
    name: "old_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  oldPrice: number | null;

  @Column("float", {
    name: "new_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  newPrice: number | null;

  @Column("int", { name: "timestamp", nullable: true, default: () => "'0'" })
  timestamp: number | null;

  @Column("varchar", { name: "source", nullable: true, length: 64 })
  source: string | null;

  @Column("int", { name: "package_id", nullable: true })
  packageId: number | null;

  @Column("varchar", { name: "package_name", nullable: true, length: 128 })
  packageName: string | null;
}
