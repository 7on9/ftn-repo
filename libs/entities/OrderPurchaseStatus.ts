import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_purchase_status", { schema: "ftn_db_main" })
export class OrderPurchaseStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "purchaseStatusID" })
  purchaseStatusId: number;

  @Column("varchar", { name: "value", nullable: true, length: 50 })
  value: string | null;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'1'" })
  active: number | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Column("varchar", { name: "class", nullable: true, length: 25 })
  class: string | null;
}
