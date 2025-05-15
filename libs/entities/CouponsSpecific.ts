import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("coupons_specific", { schema: "ftn_db_main" })
export class CouponsSpecific {
  @PrimaryGeneratedColumn({ type: "int", name: "coupon_specific_id" })
  couponSpecificId: number;

  @Column("int", { name: "coupon_id" })
  couponId: number;

  @Column("text", { name: "specific_match", nullable: true })
  specificMatch: string | null;

  @Column("int", {
    name: "specific_from",
    nullable: true,
    default: () => "'0'",
  })
  specificFrom: number | null;

  @Column("int", { name: "specific_to", nullable: true, default: () => "'0'" })
  specificTo: number | null;

  @Column("int", { name: "admin_id", nullable: true })
  adminId: number | null;

  @Column("int", { name: "create_date", nullable: true })
  createDate: number | null;
}
