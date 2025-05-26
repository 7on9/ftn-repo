import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("timestamp", ["timestamp"], {})
@Index("payment_reference", ["paymentReference"], {})
@Entity("payment_notification", { schema: "ftn_db_main" })
export class PaymentNotification {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "notification_id",
    unsigned: true,
  })
  notificationId: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("varchar", { name: "trans_id", nullable: true, length: 128 })
  transId: string | null;

  @Column("float", {
    name: "total_amount",
    nullable: true,
    unsigned: true,
    precision: 9,
    scale: 2,
    default: () => "'0.00'",
  })
  totalAmount: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 10 })
  currency: string | null;

  @Column("varchar", { name: "payment_reference", nullable: true, length: 128 })
  paymentReference: string | null;

  @Column("varchar", { name: "reply_desc", nullable: true, length: 512 })
  replyDesc: string | null;

  @Column("varchar", { name: "reply_code", nullable: true, length: 128 })
  replyCode: string | null;

  @Column("varchar", { name: "bin", nullable: true, length: 128 })
  bin: string | null;

  @Column("int", { name: "notified", nullable: true, default: () => "'0'" })
  notified: number | null;

  @Column("int", {
    name: "timestamp",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  timestamp: number | null;

  @Column("text", { name: "notes", nullable: true })
  notes: string | null;

  @Column("varchar", { name: "merchant", nullable: true, length: 128 })
  merchant: string | null;
}
