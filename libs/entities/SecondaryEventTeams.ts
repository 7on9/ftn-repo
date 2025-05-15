import { Column, Entity } from "typeorm";

@Entity("secondary_event_teams", { schema: "ftn_db_main" })
export class SecondaryEventTeams {
  @Column("int", { name: "event_id", nullable: true, default: () => "'0'" })
  eventId: number | null;

  @Column("int", { name: "event_team1", nullable: true, default: () => "'0'" })
  eventTeam1: number | null;

  @Column("int", { name: "event_team2", nullable: true, default: () => "'0'" })
  eventTeam2: number | null;
}
