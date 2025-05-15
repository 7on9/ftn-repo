import { Column, Entity, Index } from "typeorm";

@Index("similar_order", ["similarOrder"], {})
@Index("order_id2", ["orderId"], {})
@Index("date_purchased", ["datePurchased"], {})
@Index("manual", ["manual"], {})
@Index("manual_2", ["manual", "orderId"], {})
@Entity("similar_orders_paid", { schema: "ftn_db_main" })
export class SimilarOrdersPaid {
  @Column("int", {
    primary: true,
    name: "order_id",
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number;

  @Column("int", {
    primary: true,
    name: "similar_order",
    unsigned: true,
    default: () => "'0'",
  })
  similarOrder: number;

  @Column("tinyint", { name: "manual", default: () => "'0'" })
  manual: number;

  @Column("int", {
    name: "date_purchased",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  datePurchased: number | null;
}
