import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("orders_statuses", { schema: "ftn_db_main" })
export class OrdersStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "statusID" })
  statusId: number;

  @Column("varchar", { name: "value", nullable: true, length: 50 })
  value: string | null;

  @Column("varchar", { name: "value_es", nullable: true, length: 50 })
  valueEs: string | null;

  @Column("varchar", { name: "value_dk", nullable: true, length: 50 })
  valueDk: string | null;

  @Column("varchar", { name: "value_se", nullable: true, length: 50 })
  valueSe: string | null;

  @Column("varchar", { name: "value_fi", nullable: true, length: 50 })
  valueFi: string | null;

  @Column("varchar", { name: "value_nl", nullable: true, length: 50 })
  valueNl: string | null;

  @Column("varchar", { name: "value_it", nullable: true, length: 50 })
  valueIt: string | null;

  @Column("varchar", { name: "value_de", nullable: true, length: 50 })
  valueDe: string | null;

  @Column("varchar", { name: "value_fr", nullable: true, length: 50 })
  valueFr: string | null;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'1'" })
  active: number | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Column("tinyint", { name: "gotMoney", default: () => "'0'" })
  gotMoney: number;
}
