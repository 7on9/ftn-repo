import { Column, Entity, Index } from "typeorm";

@Index("order_id", ["orderId", "taskName"], { unique: true })
@Entity("order_tasks", { schema: "ftn_db_main" })
export class OrderTasks {
  @Column("int", { name: "order_id", nullable: true, unsigned: true })
  orderId: number | null;

  @Column("varchar", { name: "task_name", nullable: true, length: 50 })
  taskName: string | null;

  @Column("int", { name: "task_timestamp", nullable: true, unsigned: true })
  taskTimestamp: number | null;
}
