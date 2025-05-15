import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("supplier_id", ["supplierId"], {})
@Entity("suppliers_payments", { schema: "ftn_db_main" })
export class SuppliersPayments {
  @PrimaryGeneratedColumn({ type: "int", name: "payment_id", unsigned: true })
  paymentId: number;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("varchar", { name: "account", nullable: true, length: 128 })
  account: string | null;

  @Column("float", {
    name: "amount",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 4 })
  currency: string | null;

  @Column("int", {
    name: "date_paid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  datePaid: number | null;

  @Column("varchar", { name: "method", nullable: true, length: 64 })
  method: string | null;
}
