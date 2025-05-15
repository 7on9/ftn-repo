import { Column, Entity, Index } from "typeorm";

@Index("10", ["teamId"], { unique: true })
@Index("lang", ["lang"], {})
@Entity("teams_more_info_old_db", { schema: "ftn_db_main" })
export class TeamsMoreInfoOldDb {
  @Column("int", { name: "team_id", unsigned: true })
  teamId: number;

  @Column("text", { name: "more_info", nullable: true })
  moreInfo: string | null;

  @Column("int", { name: "lang", nullable: true, unsigned: true })
  lang: number | null;
}
