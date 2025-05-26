import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("orders_statuses_old_db", { schema: "ftn_db_main" })
export class OrdersStatusesOldDb {
  @PrimaryGeneratedColumn({ type: "int", name: "statusID" })
  statusId: number;

  @Column("varchar", { name: "value", nullable: true, length: 50 })
  value: string | null;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'1'" })
  active: number | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Column("tinyint", { name: "gotMoney", nullable: true })
  gotMoney: number | null;
}
