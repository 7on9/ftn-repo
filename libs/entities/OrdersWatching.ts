import { Column, Entity, Index } from "typeorm";

@Index("admin_id", ["adminId"], {})
@Index("timestamp", ["timestamp"], {})
@Index("order_id", ["orderId"], {})
@Entity("orders_watching", { schema: "ftn_db_main" })
export class OrdersWatching {
  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "timestamp",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  timestamp: number | null;
}
