import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("team_id", ["teamId"], { unique: true })
@Entity("gst_teams", { schema: "ftn_db_main" })
export class GstTeams {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "team_id",
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  teamId: number;

  @Column("text", { name: "team_description", nullable: true })
  teamDescription: string | null;
}
