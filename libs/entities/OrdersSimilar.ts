import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("manual_2", ["manual", "orderId"], {})
@Index("similar_order", ["similarOrder"], {})
@Index("idx_similar_order_manual", ["similarOrder", "manual"], {})
@Entity("orders_similar", { schema: "ftn_db_main" })
export class OrdersSimilar {
  @PrimaryGeneratedColumn({ type: "int", name: "os_id", unsigned: true })
  osId: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "similar_order",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  similarOrder: number | null;

  @Column("tinyint", { name: "manual", default: () => "'0'" })
  manual: number;
}
