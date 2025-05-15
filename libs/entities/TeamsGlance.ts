import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("team_id", ["teamId"], { unique: true })
@Entity("teams_glance", { schema: "ftn_db_main" })
export class TeamsGlance {
  @PrimaryGeneratedColumn({ type: "int", name: "glance_id", unsigned: true })
  glanceId: number;

  @Column("int", {
    name: "team_id",
    nullable: true,
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  teamId: number | null;

  @Column("text", { name: "glance", nullable: true })
  glance: string | null;
}
