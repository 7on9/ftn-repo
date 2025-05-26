import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["couponCustomerEmail"], {})
@Index("active", ["active"], {})
@Index("admin_id", ["couponUserCreated"], {})
@Index("coupon_created_date", ["couponCreatedDate"], {})
@Entity("coupons_permanent", { schema: "ftn_db_main" })
export class CouponsPermanent {
  @PrimaryGeneratedColumn({ type: "int", name: "coupon_id", unsigned: true })
  couponId: number;

  @Column("varchar", {
    name: "coupon_customer_email",
    nullable: true,
    length: 128,
  })
  couponCustomerEmail: string | null;

  @Column("int", {
    name: "coupon_user_created",
    unsigned: true,
    default: () => "'0'",
  })
  couponUserCreated: number;

  @Column("varchar", { name: "discount_array", nullable: true, length: 512 })
  discountArray: string | null;

  @Column("int", {
    name: "coupon_created_date",
    unsigned: true,
    default: () => "'0'",
  })
  couponCreatedDate: number;

  @Column("text", { name: "coupon_comment", nullable: true })
  couponComment: string | null;

  @Column("tinyint", { name: "active", width: 1, default: () => "'0'" })
  active: boolean;
}
