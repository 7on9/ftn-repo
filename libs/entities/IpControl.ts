import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ip_address", ["ipAddress"], {})
@Index("event_id", ["eventId"], {})
@Index("timestamp", ["timestamp"], {})
@Entity("ip_control", { schema: "ftn_db_main" })
export class IpControl {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ip_id", unsigned: true })
  ipId: string;

  @Column("varchar", { name: "ip_address", nullable: true, length: 20 })
  ipAddress: string | null;

  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;

  @Column("varchar", { name: "user_agent", nullable: true, length: 1024 })
  userAgent: string | null;

  @Column("int", { name: "timestamp", unsigned: true, default: () => "'0'" })
  timestamp: number;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
