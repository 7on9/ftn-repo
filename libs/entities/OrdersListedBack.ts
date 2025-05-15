import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_relist_order_id", ["orderId"], {})
@Index("idx_re_list_ticket_id", ["reTicketId"], {})
@Entity("orders_listed_back", { schema: "ftn_db_main" })
export class OrdersListedBack {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id" })
  orderId: number;

  @Column("int", { name: "ticket_id" })
  ticketId: number;

  @Column("int", { name: "quantity", default: () => "'0'" })
  quantity: number;

  @Column("int", { name: "re_order_id", nullable: true })
  reOrderId: number | null;

  @Column("int", { name: "re_ticket_id", nullable: true })
  reTicketId: number | null;

  @Column("int", { name: "status", default: () => "'1'" })
  status: number;

  @Column("varchar", { name: "payback_method", nullable: true, length: 50 })
  paybackMethod: string | null;

  @Column("int", { name: "create_timestamp" })
  createTimestamp: number;

  @Column("int", { name: "update_timestamp", nullable: true })
  updateTimestamp: number | null;
}
