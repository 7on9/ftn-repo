import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("affiliates_payment_request", { schema: "ftn_db_main" })
export class AffiliatesPaymentRequest {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "affiliates_payment_request_id",
    unsigned: true,
  })
  affiliatesPaymentRequestId: number;

  @Column("varchar", { name: "request_for_month", nullable: true, length: 7 })
  requestForMonth: string | null;

  @Column("int", { name: "affiliate_id", nullable: true })
  affiliateId: number | null;

  @Column("int", { name: "bank_id", nullable: true })
  bankId: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 10 })
  currency: string | null;

  @Column("text", { name: "invoice_file", nullable: true })
  invoiceFile: string | null;

  @Column("int", { name: "add_date", nullable: true })
  addDate: number | null;

  @Column("tinyint", {
    name: "is_cancel",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isCancel: boolean | null;

  @Column("text", { name: "cancel_reason", nullable: true })
  cancelReason: string | null;

  @Column("int", { name: "cancel_date", nullable: true })
  cancelDate: number | null;
}
