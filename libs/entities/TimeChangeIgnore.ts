import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("time_change_ignore", { schema: "ftn_db_main" })
export class TimeChangeIgnore {
  @PrimaryGeneratedColumn({ type: "int", name: "ignore_id" })
  ignoreId: number;

  @Column("int", { name: "tournament_id", nullable: true })
  tournamentId: number | null;

  @Column("int", { name: "event_id", nullable: true })
  eventId: number | null;
}
