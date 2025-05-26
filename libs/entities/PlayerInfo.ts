import { Column, Entity, Index } from "typeorm";

@Index("team_id", ["teamId"], { unique: true })
@Entity("player_info", { schema: "ftn_db_main" })
export class PlayerInfo {
  @Column("int", { name: "team_id" })
  teamId: number;

  @Column("text", { name: "data", nullable: true })
  data: string | null;
}
