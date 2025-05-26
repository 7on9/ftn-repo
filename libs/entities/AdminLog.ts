import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin_log", { schema: "ftn_db_main" })
export class AdminLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("varchar", { name: "ip", nullable: true, length: 45 })
  ip: string | null;

  @Column("varchar", { name: "browser", nullable: true, length: 255 })
  browser: string | null;

  @Column("int", { name: "log_time", default: () => "'0'" })
  logTime: number;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
