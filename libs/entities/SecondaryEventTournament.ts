import { Column, Entity, Index } from "typeorm";

@Index("event_id", ["eventId"], { unique: true })
@Entity("secondary_event_tournament", { schema: "ftn_db_main" })
export class SecondaryEventTournament {
  @Column("int", { name: "event_id" })
  eventId: number;

  @Column("int", {
    name: "tournament_id",
    nullable: true,
    default: () => "'0'",
  })
  tournamentId: number | null;
}
