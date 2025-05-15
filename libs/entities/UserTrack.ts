import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_track", { schema: "ftn_db_main" })
export class UserTrack {
  @PrimaryGeneratedColumn({ type: "int", name: "track_id", unsigned: true })
  trackId: number;

  @Column("varchar", { name: "ip_address", length: 64 })
  ipAddress: string;

  @Column("text", { name: "page", nullable: true })
  page: string | null;

  @Column("varchar", { name: "referer", length: 255 })
  referer: string;

  @Column("int", { name: "resolution", nullable: true })
  resolution: number | null;

  @Column("varchar", { name: "user_agent", length: 512 })
  userAgent: string;

  @Column("varchar", { name: "accept_vars", length: 512 })
  acceptVars: string;

  @Column("int", { name: "timestamp", nullable: true })
  timestamp: number | null;
}
