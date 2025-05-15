import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("coupon_types", { schema: "ftn_db_main" })
export class CouponTypes {
  @PrimaryGeneratedColumn({ type: "int", name: "coupon_typesID" })
  couponTypesId: number;

  @Column("varchar", { name: "coupon_name", nullable: true, length: 255 })
  couponName: string | null;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'1'" })
  active: number | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;
}
