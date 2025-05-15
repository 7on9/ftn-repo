import { Column, Entity, Index } from "typeorm";

@Index("order_id", ["orderId"], { unique: true })
@Entity("orders_delivery_info", { schema: "ftn_db_main" })
export class OrdersDeliveryInfo {
  @Column("int", { name: "order_id", unsigned: true })
  orderId: number;

  @Column("varchar", { name: "delivery_type", nullable: true, length: 32 })
  deliveryType: string | null;

  @Column("varchar", { name: "contact_name", nullable: true, length: 64 })
  contactName: string | null;

  @Column("varchar", { name: "contact_phone", nullable: true, length: 64 })
  contactPhone: string | null;

  @Column("varchar", { name: "delivery_location", nullable: true, length: 128 })
  deliveryLocation: string | null;

  @Column("int", {
    name: "delivery_time",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  deliveryTime: number | null;

  @Column("varchar", { name: "delivery_time_raw", nullable: true, length: 128 })
  deliveryTimeRaw: string | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;
}
