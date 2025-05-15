import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("done", ["done"], {})
@Entity("tracking_data", { schema: "ftn_db_main" })
export class TrackingData {
  @PrimaryGeneratedColumn({ type: "int", name: "tracking_id" })
  trackingId: number;

  @Column("varchar", { name: "subject", nullable: true, length: 256 })
  subject: string | null;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("int", { name: "date_added", nullable: true, default: () => "'0'" })
  dateAdded: number | null;

  @Column("int", { name: "date_changed", nullable: true, default: () => "'0'" })
  dateChanged: number | null;

  @Column("int", { name: "admin_id", nullable: true, default: () => "'0'" })
  adminId: number | null;

  @Column("tinyint", { name: "done", width: 1, default: () => "'0'" })
  done: boolean;
}
