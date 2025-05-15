import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ip", ["ip", "time"], {})
@Entity("livechat_log", { schema: "ftn_db_main" })
export class LivechatLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "ip", nullable: true, length: 45 })
  ip: string | null;

  @Column("int", { name: "time", unsigned: true, default: () => "'0'" })
  time: number;

  @Column("varchar", { name: "page", nullable: true, length: 128 })
  page: string | null;

  @Column("varchar", { name: "data", nullable: true, length: 512 })
  data: string | null;
}
