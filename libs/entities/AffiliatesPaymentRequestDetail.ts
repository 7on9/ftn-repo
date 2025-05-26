import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "aff_request_detail",
  ["affiliatesPaymentRequestId", "orderId", "isRefund"],
  { unique: true }
)
@Entity("affiliates_payment_request_detail", { schema: "ftn_db_main" })
export class AffiliatesPaymentRequestDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", {
    name: "affiliates_payment_request_id",
    nullable: true,
    unsigned: true,
  })
  affiliatesPaymentRequestId: number | null;

  @Column("int", { name: "order_id", nullable: true })
  orderId: number | null;

  @Column("tinyint", {
    name: "is_refund",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isRefund: boolean | null;

  @Column("tinyint", {
    name: "is_lock",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isLock: boolean | null;

  @Column("int", { name: "add_date", nullable: true })
  addDate: number | null;

  @Column("tinyint", {
    name: "is_paid",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isPaid: boolean | null;

  @Column("varchar", { name: "payment_method", nullable: true, length: 128 })
  paymentMethod: string | null;

  @Column("varchar", { name: "extra", nullable: true, length: 1024 })
  extra: string | null;

  @Column("int", { name: "pay_date", nullable: true })
  payDate: number | null;

  @Column("int", { name: "insert_pay", nullable: true })
  insertPay: number | null;

  @Column("int", { name: "admin_pay", nullable: true })
  adminPay: number | null;
}
