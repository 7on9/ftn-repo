import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("supplier_id", ["supplierId"], {})
@Index("order_id", ["orderId"], {})
@Index("admin_id", ["adminId"], {})
@Index("idx_suppliers_mistakes_order", ["orderId"], {})
@Index("idx_suppliers_mistakes_supplier", ["supplierId"], {})
@Index(
  "idx_suppliers_mistakes_order_supplier_status",
  ["orderId", "supplierId", "status"],
  {}
)
@Entity("suppliers_mistakes", { schema: "ftn_db_main" })
export class SuppliersMistakes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("varchar", { name: "mistake", nullable: true, length: 128 })
  mistake: string | null;

  @Column("text", { name: "comments", nullable: true })
  comments: string | null;

  @Column("tinyint", { name: "status", width: 1, default: () => "'0'" })
  status: boolean;
}
