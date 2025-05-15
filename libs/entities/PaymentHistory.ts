import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("timestamp", ["timestamp"], {})
@Index("payment_reference", ["paymentReference"], {})
@Entity("payment_history", { schema: "ftn_db_main" })
export class PaymentHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "payment_id", unsigned: true })
  paymentId: number;

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

  @Column("varchar", { name: "token", nullable: true, length: 254 })
  token: string | null;

  @Column("varchar", { name: "code_number", nullable: true, length: 128 })
  codeNumber: string | null;

  @Column("varchar", { name: "code_text", nullable: true, length: 254 })
  codeText: string | null;

  @Column("text", { name: "error", nullable: true })
  error: string | null;

  @Column("varchar", { name: "unique_id", nullable: true, length: 254 })
  uniqueId: string | null;

  @Column("int", {
    name: "timestamp",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  timestamp: number | null;

  @Column("varchar", { name: "auth_number", nullable: true, length: 254 })
  authNumber: string | null;

  @Column("float", {
    name: "commission",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  commission: number | null;

  @Column("int", {
    name: "six_digits",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sixDigits: number | null;

  @Column("int", {
    name: "four_digits",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  fourDigits: number | null;

  @Column("varchar", { name: "name_on_card", nullable: true, length: 64 })
  nameOnCard: string | null;

  @Column("tinyint", { name: "secure", width: 1, default: () => "'0'" })
  secure: boolean;

  @Column("varchar", { name: "cvv_result", nullable: true, length: 16 })
  cvvResult: string | null;

  @Column("varchar", { name: "avs_postal", nullable: true, length: 4 })
  avsPostal: string | null;

  @Column("varchar", { name: "avs_address", nullable: true, length: 4 })
  avsAddress: string | null;

  @Column("varchar", { name: "real_currency_paid", nullable: true, length: 10 })
  realCurrencyPaid: string | null;

  @Column("varchar", { name: "merchant", nullable: true, length: 128 })
  merchant: string | null;

  @Column("varchar", { name: "ecp_trans_id", nullable: true, length: 64 })
  ecpTransId: string | null;

  @Column("varchar", { name: "ecp_unique_id", nullable: true, length: 64 })
  ecpUniqueId: string | null;

  @Column("int", { name: "notified", nullable: true, default: () => "'0'" })
  notified: number | null;

  @Column("tinyint", {
    name: "is_status_checked",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isStatusChecked: boolean | null;

  @Column("varchar", { name: "payment_reference", nullable: true, length: 128 })
  paymentReference: string | null;
}
