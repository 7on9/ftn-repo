import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("money_id", ["purchaseId"], {})
@Index("date_paid", ["datePaid"], {})
@Entity("suppliers_money_history", { schema: "ftn_db_main" })
export class SuppliersMoneyHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "purchase_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  purchaseId: number | null;

  @Column("float", {
    name: "amount",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: number | null;

  @Column("varchar", { name: "method", nullable: true, length: 128 })
  method: string | null;

  @Column("varchar", { name: "currency", nullable: true, length: 3 })
  currency: string | null;

  @Column("int", {
    name: "date_paid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  datePaid: number | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;
}
