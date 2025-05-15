import { Column, Entity, Index } from "typeorm";

@Index("purchase_id", ["orderId"], {})
@Entity("ftn_purchase_orders", { schema: "ftn_db_main" })
export class FtnPurchaseOrders {
  @Column("int", { primary: true, name: "purchase_id", unsigned: true })
  purchaseId: number;

  @Column("int", { name: "order_id", nullable: true, unsigned: true })
  orderId: number | null;

  @Column("int", {
    name: "purchase_quantity",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  purchaseQuantity: number | null;

  @Column("int", {
    name: "order_quantity",
    nullable: true,
    default: () => "'0'",
  })
  orderQuantity: number | null;

  @Column("varchar", { name: "company", nullable: true, length: 255 })
  company: string | null;
}
