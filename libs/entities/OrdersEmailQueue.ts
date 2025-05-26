import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("done", ["sent"], {})
@Entity("orders_email_queue", { schema: "ftn_db_main" })
export class OrdersEmailQueue {
  @PrimaryGeneratedColumn({ type: "int", name: "q_id", unsigned: true })
  qId: number;

  @Column("int", {
    name: "added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  added: number | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "template_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  templateId: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 256 })
  subject: string | null;

  @Column("text", { name: "body", nullable: true })
  body: string | null;

  @Column("varchar", { name: "source", nullable: true, length: 32 })
  source: string | null;

  @Column("text", { name: "data", nullable: true })
  data: string | null;

  @Column("tinyint", { name: "sent", width: 1, default: () => "'0'" })
  sent: boolean;

  @Column("int", {
    name: "sent_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sentDate: number | null;
}
