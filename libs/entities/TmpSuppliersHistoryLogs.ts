import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tmp_suppliers_history_logs", { schema: "ftn_db_main" })
export class TmpSuppliersHistoryLogs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", { name: "supplier_id" })
  supplierId: number;

  @Column("varchar", { name: "endpoint", nullable: true, length: 512 })
  endpoint: string | null;

  @Column("varchar", { name: "http_method", length: 10 })
  httpMethod: string;

  @Column("text", { name: "headers", nullable: true })
  headers: string | null;

  @Column("text", { name: "payload", nullable: true })
  payload: string | null;

  @Column("varchar", { name: "client_ip", nullable: true, length: 50 })
  clientIp: string | null;

  @Column("int", { name: "created_at", default: () => "'0'" })
  createdAt: number;
}
