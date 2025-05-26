import { Column, Entity, Index } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("orders_survey", { schema: "ftn_db_main" })
export class OrdersSurvey {
  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("varchar", { name: "reason", nullable: true, length: 25 })
  reason: string | null;

  @Column("varchar", { name: "site", nullable: true, length: 256 })
  site: string | null;

  @Column("int", {
    name: "time",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  time: number | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("text", { name: "more", nullable: true })
  more: string | null;
}
