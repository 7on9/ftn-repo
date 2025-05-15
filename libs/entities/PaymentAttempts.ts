import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_order_id", ["orderId"], {})
@Entity("payment_attempts", { schema: "ftn_db_main" })
export class PaymentAttempts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id", nullable: true, default: () => "'0'" })
  orderId: number | null;

  @Column("varchar", { name: "reference_id", nullable: true, length: 255 })
  referenceId: string | null;

  @Column("varchar", { name: "transaction_id", nullable: true, length: 255 })
  transactionId: string | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 255 })
  ipAddress: string | null;

  @Column("varchar", { name: "insert_time", nullable: true, length: 255 })
  insertTime: string | null;

  @Column("varchar", { name: "amount", nullable: true, length: 255 })
  amount: string | null;

  @Column("varchar", { name: "currency", nullable: true, length: 255 })
  currency: string | null;

  @Column("varchar", { name: "card_holder_name", nullable: true, length: 255 })
  cardHolderName: string | null;

  @Column("varchar", { name: "expiration_date", nullable: true, length: 255 })
  expirationDate: string | null;

  @Column("varchar", {
    name: "card_first_six_numbers",
    nullable: true,
    length: 255,
  })
  cardFirstSixNumbers: string | null;

  @Column("varchar", {
    name: "card_last_four_numbers",
    nullable: true,
    length: 255,
  })
  cardLastFourNumbers: string | null;

  @Column("varchar", { name: "cvv", nullable: true, length: 255 })
  cvv: string | null;

  @Column("text", { name: "md", nullable: true })
  md: string | null;

  @Column("varchar", { name: "merchant", nullable: true, length: 255 })
  merchant: string | null;

  @Column("varchar", { name: "result", nullable: true, length: 255 })
  result: string | null;

  @Column("varchar", { name: "session_cookie", nullable: true, length: 100 })
  sessionCookie: string | null;

  @Column("tinyint", {
    name: "is_status_checked",
    width: 1,
    default: () => "'0'",
  })
  isStatusChecked: boolean;

  @Column("tinyint", {
    name: "is_notification_checked",
    width: 1,
    default: () => "'0'",
  })
  isNotificationChecked: boolean;

  @Column("varchar", {
    name: "order_type",
    nullable: true,
    length: 50,
    default: () => "'order'",
  })
  orderType: string | null;
}
