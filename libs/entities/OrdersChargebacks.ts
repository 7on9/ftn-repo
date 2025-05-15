import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("status", ["status"], {})
@Index("defence_sent", ["defenceSent"], {})
@Index("date", ["date"], {})
@Index("merchant", ["merchant"], {})
@Entity("orders_chargebacks", { schema: "ftn_db_main" })
export class OrdersChargebacks {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", { name: "merchant", nullable: true, default: () => "'0'" })
  merchant: number | null;

  @Column("int", {
    name: "date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  date: number | null;

  @Column("int", {
    name: "due_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dueDate: number | null;

  @Column("varchar", { name: "status", nullable: true, length: 64 })
  status: string | null;

  @Column("int", { name: "reason", nullable: true, default: () => "'0'" })
  reason: number | null;

  @Column("text", { name: "defence", nullable: true })
  defence: string | null;

  @Column("tinyint", { name: "defence_sent", width: 1, default: () => "'0'" })
  defenceSent: boolean;
}
