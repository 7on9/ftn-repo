import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("voucher_code", ["voucherCode"], {})
@Entity("vouchers", { schema: "ftn_db_main" })
export class Vouchers {
  @PrimaryGeneratedColumn({ type: "int", name: "voucher_id", unsigned: true })
  voucherId: number;

  @Column("int", {
    name: "voucher_created_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  voucherCreatedDate: number | null;

  @Column("smallint", {
    name: "voucher_user_created",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  voucherUserCreated: number | null;

  @Column("float", {
    name: "voucher_amount",
    nullable: true,
    unsigned: true,
    precision: 6,
    scale: 2,
    default: () => "'0.00'",
  })
  voucherAmount: number | null;

  @Column("float", {
    name: "voucher_amount_left",
    nullable: true,
    unsigned: true,
    precision: 6,
    scale: 2,
    default: () => "'0.00'",
  })
  voucherAmountLeft: number | null;

  @Column("varchar", { name: "voucher_rate", nullable: true, length: 4 })
  voucherRate: string | null;

  @Column("int", {
    name: "voucher_order_id_used",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  voucherOrderIdUsed: number | null;

  @Column("text", { name: "voucher_comment", nullable: true })
  voucherComment: string | null;

  @Column("tinyint", { name: "voucher_active", width: 1, default: () => "'0'" })
  voucherActive: boolean;

  @Column("varchar", { name: "voucher_code", nullable: true, length: 35 })
  voucherCode: string | null;

  @Column("int", {
    name: "voucher_source",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  voucherSource: number | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 128 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 128 })
  lastName: string | null;

  @Column("varchar", { name: "phone_number", nullable: true, length: 64 })
  phoneNumber: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 64 })
  country: string | null;

  @Column("varchar", { name: "state", nullable: true, length: 254 })
  state: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 64 })
  city: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 128 })
  address: string | null;

  @Column("varchar", { name: "postal_code", nullable: true, length: 32 })
  postalCode: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
