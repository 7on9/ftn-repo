import { Column, Entity, Index } from "typeorm";

@Index("idx_event_id", ["eventId"], {})
@Entity("event_date_history", { schema: "ftn_db_main" })
export class EventDateHistory {
  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;

  @Column("int", { name: "old_date", unsigned: true, default: () => "'0'" })
  oldDate: number;

  @Column("int", { name: "new_date", unsigned: true, default: () => "'0'" })
  newDate: number;

  @Column("int", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("int", { name: "changed", unsigned: true, default: () => "'0'" })
  changed: number;
}
