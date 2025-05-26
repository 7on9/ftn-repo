import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("unique_action", ["supplierId", "date", "action"], { unique: true })
@Index("supplier_id", ["supplierId"], {})
@Entity("api_log_stats", { schema: "ftn_db_main" })
export class ApiLogStats {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "supplier_id" })
  supplierId: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("varchar", { name: "action", length: 100 })
  action: string;

  @Column("int", { name: "counter", default: () => "'1'" })
  counter: number;
}
