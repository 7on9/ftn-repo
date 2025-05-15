import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { NomupaySupplierTransferMethods } from "./NomupaySupplierTransferMethods";

@Index(
  "nomupay_supplier_transfer_methods_id",
  ["nomupaySupplierTransferMethodsId"],
  {}
)
@Entity("nomupay_supplier_payments", { schema: "ftn_db_main" })
export class NomupaySupplierPayments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "nomupay_supplier_transfer_methods_id" })
  nomupaySupplierTransferMethodsId: number;

  @Column("decimal", { name: "amount", precision: 10, scale: 2 })
  amount: string;

  @Column("varchar", { name: "currency_code", length: 3 })
  currencyCode: string;

  @Column("timestamp", {
    name: "payment_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  paymentDate: Date | null;

  @Column("varchar", { name: "nomupay_payment_id", nullable: true, length: 50 })
  nomupayPaymentId: string | null;

  @Column("varchar", {
    name: "status",
    nullable: true,
    length: 50,
    default: () => "'NEW'",
  })
  status: string | null;

  @Column("text", { name: "response", nullable: true })
  response: string | null;

  @Column("json", { name: "meta", nullable: true })
  meta: object | null;

  @Column("int", { name: "updated_at", nullable: true })
  updatedAt: number | null;

  @Column("int", { name: "cron_executed_at", nullable: true })
  cronExecutedAt: number | null;

  @ManyToOne(
    () => NomupaySupplierTransferMethods,
    (nomupaySupplierTransferMethods) =>
      nomupaySupplierTransferMethods.nomupaySupplierPayments,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    {
      name: "nomupay_supplier_transfer_methods_id",
      referencedColumnName: "id",
    },
  ])
  nomupaySupplierTransferMethods: NomupaySupplierTransferMethods;
}
