import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("key", ["key"], {})
@Index("order_id", ["orderId"], {})
@Entity("order_toggles", { schema: "ftn_db_main" })
export class OrderToggles {
  @PrimaryGeneratedColumn({ type: "int", name: "it_id", unsigned: true })
  itId: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("varchar", { name: "key", nullable: true, length: 50 })
  key: string | null;

  @Column("varchar", { name: "val", nullable: true, length: 256 })
  val: string | null;
}
