import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "coupon_customer_email",
  ["couponCustomerEmail", "couponOrderIdUsed"],
  {}
)
@Index("voucher_code", ["voucherCode"], {})
@Index("promotion", ["promotion"], {})
@Entity("coupons", { schema: "ftn_db_main" })
export class Coupons {
  @PrimaryGeneratedColumn({ type: "int", name: "coupon_id", unsigned: true })
  couponId: number;

  @Column("int", {
    name: "coupon_created_date",
    unsigned: true,
    default: () => "'0'",
  })
  couponCreatedDate: number;

  @Column("smallint", {
    name: "coupon_user_created",
    unsigned: true,
    default: () => "'0'",
  })
  couponUserCreated: number;

  @Column("varchar", {
    name: "coupon_customer_email",
    nullable: true,
    length: 128,
  })
  couponCustomerEmail: string | null;

  @Column("float", {
    name: "coupon_amount",
    unsigned: true,
    precision: 9,
    scale: 2,
    default: () => "'0.00'",
  })
  couponAmount: number;

  @Column("varchar", { name: "coupon_rate", nullable: true, length: 4 })
  couponRate: string | null;

  @Column("int", {
    name: "coupon_order_id_used",
    unsigned: true,
    default: () => "'0'",
  })
  couponOrderIdUsed: number;

  @Column("int", {
    name: "coupon_expire",
    unsigned: true,
    default: () => "'0'",
  })
  couponExpire: number;

  @Column("text", { name: "coupon_comment", nullable: true })
  couponComment: string | null;

  @Column("varchar", { name: "percent_amount", nullable: true, length: 10 })
  percentAmount: string | null;

  @Column("tinyint", { name: "voucher_active", width: 1, default: () => "'0'" })
  voucherActive: boolean;

  @Column("varchar", { name: "voucher_code", nullable: true, length: 32 })
  voucherCode: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("int", { name: "order_id", nullable: true })
  orderId: number | null;

  @Column("varchar", { name: "promotion", nullable: true, length: 16 })
  promotion: string | null;

  @Column("int", { name: "coupon_typesID", nullable: true })
  couponTypesId: number | null;

  @Column("int", { name: "parent_coupon_id", nullable: true, unsigned: true })
  parentCouponId: number | null;

  @Column("int", { name: "order_id_lock", nullable: true, unsigned: true })
  orderIdLock: number | null;

  @Column("bigint", { name: "lock_timestamp", nullable: true, unsigned: true })
  lockTimestamp: string | null;

  @Column("float", {
    name: "original_coupon_value",
    nullable: true,
    unsigned: true,
    precision: 9,
    scale: 2,
  })
  originalCouponValue: number | null;
}
