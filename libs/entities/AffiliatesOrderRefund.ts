import { Column, Entity } from "typeorm";

@Entity("affiliates_order_refund", { schema: "ftn_db_main" })
export class AffiliatesOrderRefund {
  @Column("int", { primary: true, name: "order_id" })
  orderId: number;

  @Column("varchar", { name: "order_status", nullable: true, length: 64 })
  orderStatus: string | null;

  @Column("int", { name: "admin_id", nullable: true })
  adminId: number | null;

  @Column("tinyint", {
    name: "is_requested",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isRequested: boolean | null;

  @Column("int", { name: "add_date", nullable: true })
  addDate: number | null;
}
