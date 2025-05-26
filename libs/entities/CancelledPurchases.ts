import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cancelled_purchases", { schema: "ftn_db_main" })
export class CancelledPurchases {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "purchase_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  purchaseId: number | null;

  @Column("int", {
    name: "origin_purchase_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  originPurchaseId: number | null;

  @Column("int", { name: "created_date", nullable: true, default: () => "'0'" })
  createdDate: number | null;
}
