import { Column, Entity, Index } from "typeorm";

@Index("ticket_id", ["ticketId", "ticketNum"], { unique: true })
@Index("insert_time", ["insertTime"], {})
@Index("order_id", ["orderId"], {})
@Index("idx_ticket_order", ["ticketId", "orderId"], {})
@Index("idx_exchange_ticket_locks_insert_time", ["insertTime"], {})
@Entity("exchange_ticket_locks", { schema: "ftn_db_main" })
export class ExchangeTicketLocks {
  @Column("int", { name: "ticket_id", unsigned: true })
  ticketId: number;

  @Column("int", { name: "ticket_num", unsigned: true })
  ticketNum: number;

  @Column("int", { name: "insert_time", nullable: true })
  insertTime: number | null;

  @Column("int", { name: "order_id", unsigned: true })
  orderId: number;
}
