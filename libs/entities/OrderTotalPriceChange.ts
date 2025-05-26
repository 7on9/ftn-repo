import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("order_total_price_change", { schema: "ftn_db_main" })
export class OrderTotalPriceChange {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id", nullable: true, default: () => "'0'" })
  orderId: number | null;

  @Column("float", {
    name: "new_price",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  newPrice: number | null;

  @Column("float", {
    name: "old_price",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  oldPrice: number | null;

  @Column("int", { name: "change_date", nullable: true, default: () => "'0'" })
  changeDate: number | null;

  @Column("tinyint", { name: "user_id", default: () => "'0'" })
  userId: number;
}
