import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("purchase_id", ["supplierId"], {})
@Index("order_id", ["orderId"], {})
@Index(
  "order_supplier_category",
  ["orderId", "supplierId", "supplierCategoryId"],
  {}
)
@Entity("purchase_applied", { schema: "ftn_db_main" })
export class PurchaseApplied {
  @PrimaryGeneratedColumn({ type: "int", name: "applied_id" })
  appliedId: number;

  @Column("int", { name: "supplier_id", nullable: true, default: () => "'0'" })
  supplierId: number | null;

  @Column("int", { name: "quantity", nullable: true, default: () => "'0'" })
  quantity: number | null;

  @Column("int", { name: "order_id", nullable: true, default: () => "'0'" })
  orderId: number | null;

  @Column("varchar", { name: "purchase_status", nullable: true, length: 254 })
  purchaseStatus: string | null;

  @Column("int", {
    name: "supplier_category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierCategoryId: number | null;

  @Column("int", {
    name: "ftl_applied_id",
    nullable: true,
    default: () => "'0'",
  })
  ftlAppliedId: number | null;

  @Column("varchar", { name: "tracking_number", nullable: true, length: 255 })
  trackingNumber: string | null;
}
