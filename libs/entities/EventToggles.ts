import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("event_toggles", { schema: "ftn_db_main" })
export class EventToggles {
  @PrimaryGeneratedColumn({ type: "int", name: "toggle_id" })
  toggleId: number;

  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;

  @Column("varchar", { name: "toggle_key", nullable: true, length: 512 })
  toggleKey: string | null;

  @Column("varchar", { name: "toggle_value", nullable: true, length: 512 })
  toggleValue: string | null;
}
