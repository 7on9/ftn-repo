import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("most_popular_events", { schema: "ftn_db_main" })
export class MostPopularEvents {
  @PrimaryGeneratedColumn({ type: "int", name: "popular_eventsID" })
  popularEventsId: number;

  @Column("int", { name: "event_id", nullable: true })
  eventId: number | null;

  @Column("int", { name: "added_time", nullable: true })
  addedTime: number | null;

  @Column("int", { name: "added_admin", nullable: true })
  addedAdmin: number | null;

  @Column("int", { name: "primary", nullable: true, default: () => "'0'" })
  primary: number | null;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'1'" })
  active: number | null;
}
