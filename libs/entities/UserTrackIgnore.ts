import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ip", ["ip"], { unique: true })
@Entity("user_track_ignore", { schema: "ftn_db_main" })
export class UserTrackIgnore {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "ip", nullable: true, unique: true, length: 45 })
  ip: string | null;

  @Column("varchar", { name: "cause", nullable: true, length: 64 })
  cause: string | null;
}
