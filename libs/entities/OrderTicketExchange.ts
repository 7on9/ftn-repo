import { Column, Entity, Index } from "typeorm";

@Index("purchase_id", ["purchaseId"], {})
@Index("order_id", ["orderId"], {})
@Index("ticket_id", ["ticketId"], {})
@Entity("order_ticket_exchange", { schema: "ftn_db_main" })
export class OrderTicketExchange {
  @Column("int", { primary: true, name: "order_id", unsigned: true })
  orderId: number;

  @Column("int", { primary: true, name: "ticket_id", unsigned: true })
  ticketId: number;

  @Column("int", { name: "purchase_id", nullable: true, unsigned: true })
  purchaseId: number | null;

  @Column("int", {
    name: "is_comment_closed",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  isCommentClosed: number | null;

  @Column("double", {
    name: "supplier_money",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  supplierMoney: number;
}
