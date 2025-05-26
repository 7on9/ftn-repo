import { Column, Entity } from "typeorm";

@Entity("teams_more_info", { schema: "ftn_db_main" })
export class TeamsMoreInfo {
  @Column("int", { primary: true, name: "team_id", unsigned: true })
  teamId: number;

  @Column("text", { name: "more_info", nullable: true })
  moreInfo: string | null;

  @Column("text", { name: "more_info_es", nullable: true })
  moreInfoEs: string | null;

  @Column("text", { name: "more_info_dk", nullable: true })
  moreInfoDk: string | null;

  @Column("text", { name: "more_info_se", nullable: true })
  moreInfoSe: string | null;

  @Column("text", { name: "more_info_fi", nullable: true })
  moreInfoFi: string | null;

  @Column("text", { name: "more_info_nl", nullable: true })
  moreInfoNl: string | null;

  @Column("text", { name: "more_info_it", nullable: true })
  moreInfoIt: string | null;

  @Column("text", { name: "more_info_de", nullable: true })
  moreInfoDe: string | null;

  @Column("text", { name: "more_info_fr", nullable: true })
  moreInfoFr: string | null;

  @Column("int", {
    name: "lang",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  lang: number | null;
}
