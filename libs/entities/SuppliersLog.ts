import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("suppliers_log_supplier_id_idx", ["supplierId", "logTime"], {})
@Index("suppliers_log_supplier_id", ["supplierId"], {})
@Entity("suppliers_log", { schema: "ftn_db_main" })
export class SuppliersLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("varchar", { name: "ip", nullable: true, length: 45 })
  ip: string | null;

  @Column("int", { name: "log_time", nullable: true, default: () => "'0'" })
  logTime: number | null;

  @Column("varchar", { name: "read_message", nullable: true, length: 100 })
  readMessage: string | null;

  @Column("int", { name: "supplier_sub_id", nullable: true })
  supplierSubId: number | null;
}
