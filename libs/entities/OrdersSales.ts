import { Column, Entity, Index } from "typeorm";

@Index("order_id", ["orderId", "salesmanId"], {})
@Entity("orders_sales", { schema: "ftn_db_main" })
export class OrdersSales {
  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "salesman_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  salesmanId: number | null;
}
