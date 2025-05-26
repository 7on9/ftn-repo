import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("voucher_id", ["voucherId"], { unique: true })
@Index("voucher_email", ["voucherEmail"], {})
@Index("voucher_code", ["voucherCode"], {})
@Entity("black_friday_vouchers", { schema: "ftn_db_main" })
export class BlackFridayVouchers {
  @PrimaryGeneratedColumn({ type: "int", name: "voucher_id", unsigned: true })
  voucherId: number;

  @Column("varchar", { name: "voucher_email", nullable: true, length: 64 })
  voucherEmail: string | null;

  @Column("varchar", { name: "voucher_code", nullable: true, length: 32 })
  voucherCode: string | null;

  @Column("tinyint", {
    name: "voucher_created",
    unsigned: true,
    default: () => "'0'",
  })
  voucherCreated: number;
}
