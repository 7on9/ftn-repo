import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("data_id", ["dataId", "dataType"], { unique: true })
@Index("idx_data_type", ["dataType"], {})
@Index("idx_filtering", ["dataType", "lastRun", "lastVisit"], {})
@Entity("queue_visit_tracking", { schema: "ftn_db_main" })
export class QueueVisitTracking {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "data_id", unsigned: true })
  dataId: number;

  @Column("varchar", { name: "data_type", nullable: true, length: 50 })
  dataType: string | null;

  @Column("int", { name: "last_visit", nullable: true })
  lastVisit: number | null;

  @Column("int", { name: "last_run", nullable: true })
  lastRun: number | null;

  @Column("int", { name: "created_at", nullable: true })
  createdAt: number | null;

  @Column("tinyint", {
    name: "processed",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  processed: boolean | null;
}
