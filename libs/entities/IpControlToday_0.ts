import { Column, Entity, Index } from "typeorm";

@Index("ip_address", ["ipAddress"], {})
@Index("event_id", ["eventId"], {})
@Index("ip_control_today_0_ip_address_IDX", ["ipAddress", "eventId"], {})
@Entity("ip_control_today_0", { schema: "ftn_db_main" })
export class IpControlToday_0 {
  @Column("varchar", { name: "ip_address", nullable: true, length: 40 })
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
