import { Column, Entity, Index } from "typeorm";

@Index("ip_address", ["ipAddress"], { unique: true })
@Index("event_id", ["eventId"], {})
@Index("timestamp", ["timestamp"], {})
@Entity("watching_right_now", { schema: "ftn_db_main" })
export class WatchingRightNow {
  @Column("varchar", { name: "ip_address", length: 45 })
  ipAddress: string;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("int", {
    name: "timestamp",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  timestamp: number | null;
}
