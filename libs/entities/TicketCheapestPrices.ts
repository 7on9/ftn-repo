import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_event_id", ["eventId"], {})
@Index("idx_category_id", ["categoryId"], {})
@Index("idx_price", ["price"], {})
@Entity("ticket_cheapest_prices", { schema: "ftn_db_main" })
export class TicketCheapestPrices {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "event_id", unsigned: true })
  eventId: number;

  @Column("int", { name: "category_id", unsigned: true })
  categoryId: number;

  @Column("float", {
    name: "price",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number | null;

  @Column("int", { name: "quantity", nullable: true, default: () => "'0'" })
  quantity: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 255 })
  currency: string | null;

  @Column("varchar", { name: "split_type", nullable: true, length: 50 })
  splitType: string | null;

  @Column("varchar", { name: "splits", nullable: true, length: 512 })
  splits: string | null;

  @Column("varchar", { name: "blocks", nullable: true, length: 255 })
  blocks: string | null;

  @Column("varchar", { name: "source", nullable: true, length: 512 })
  source: string | null;

  @Column("varchar", { name: "url", nullable: true, length: 512 })
  url: string | null;

  @Column("varchar", { name: "exteral_listing_id", nullable: true, length: 50 })
  exteralListingId: string | null;

  @Column("int", { name: "created_at", nullable: true })
  createdAt: number | null;
}
