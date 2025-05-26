import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_ticket_status", ["ticketId", "status"], {})
@Entity("tixstock_ticket_status", { schema: "ftn_db_main" })
export class TixstockTicketStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "ticket_id" })
  ticketId: number;

  @Column("varchar", { name: "token", nullable: true, length: 128 })
  token: string | null;

  @Column("int", { name: "order_id", nullable: true })
  orderId: number | null;

  @Column("varchar", { name: "hold_id", nullable: true, length: 50 })
  holdId: string | null;

  @Column("varchar", { name: "tix_order_id", nullable: true, length: 50 })
  tixOrderId: string | null;

  @Column("varchar", { name: "tix_order_status", nullable: true, length: 50 })
  tixOrderStatus: string | null;

  @Column("int", { name: "hold_quantity", default: () => "'0'" })
  holdQuantity: number;

  @Column("int", { name: "released_quantity", default: () => "'0'" })
  releasedQuantity: number;

  @Column("varchar", {
    name: "status",
    nullable: true,
    comment: "hold/released",
    length: 20,
  })
  status: string | null;

  @Column("varchar", {
    name: "source",
    nullable: true,
    comment: "internal/external",
    length: 50,
  })
  source: string | null;

  @Column("int", { name: "created", unsigned: true })
  created: number;

  @Column("int", { name: "updated", nullable: true, unsigned: true })
  updated: number | null;
}
