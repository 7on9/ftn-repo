import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cron_report", { schema: "ftn_db_main" })
export class CronReport {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "timestamp", nullable: true, unsigned: true })
  timestamp: number | null;
}
