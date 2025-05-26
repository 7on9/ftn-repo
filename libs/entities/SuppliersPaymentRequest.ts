import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers_payment_request", { schema: "ftn_db_main" })
export class SuppliersPaymentRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "suppliers_payment_request_id" })
  suppliersPaymentRequestId: number;

  @Column("int", { name: "supplier_id", nullable: true })
  supplierId: number | null;

  @Column("int", { name: "bank_id", nullable: true })
  bankId: number | null;

  @Column("varchar", {
    name: "bank_type",
    nullable: true,
    length: 50,
    default: () => "'bank'",
  })
  bankType: string | null;

  @Column("text", { name: "purchase_ids", nullable: true })
  purchaseIds: string | null;

  @Column("text", { name: "agency_purchase_ids", nullable: true })
  agencyPurchaseIds: string | null;

  @Column("float", {
    name: "deduction",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  deduction: number | null;

  @Column("int", { name: "status_id", nullable: true })
  statusId: number | null;

  @Column("int", { name: "add_date", nullable: true })
  addDate: number | null;

  @Column("tinyint", {
    name: "sent_request",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  sentRequest: boolean | null;

  @Column("varchar", { name: "currency", nullable: true, length: 10 })
  currency: string | null;

  @Column("text", { name: "invoice_file", nullable: true })
  invoiceFile: string | null;

  @Column("varchar", { name: "request_comment", nullable: true, length: 255 })
  requestComment: string | null;

  @Column("varchar", { name: "request_company", nullable: true, length: 120 })
  requestCompany: string | null;

  @Column("text", { name: "reason_cancel", nullable: true })
  reasonCancel: string | null;

  @Column("int", { name: "cancel_date", nullable: true })
  cancelDate: number | null;
}
