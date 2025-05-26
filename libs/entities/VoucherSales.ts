import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("voucher_sales", { schema: "ftn_db_main" })
export class VoucherSales {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "email", nullable: true, length: 128 })
  email: string | null;

  @Column("float", {
    name: "percentage",
    nullable: true,
    unsigned: true,
    precision: 6,
    scale: 2,
    default: () => "'0.00'",
  })
  percentage: number | null;
}
