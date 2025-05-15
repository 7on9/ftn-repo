import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("team_id", ["teamId"], { unique: true })
@Entity("wtn_teams", { schema: "ftn_db_main" })
export class WtnTeams {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "team_id",
    nullable: true,
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  teamId: number | null;

  @Column("text", { name: "team_description", nullable: true })
  teamDescription: string | null;
}
