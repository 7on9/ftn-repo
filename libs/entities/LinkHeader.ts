import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("link_header", { schema: "ftn_db_main" })
export class LinkHeader {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "link_id", unsigned: true })
  linkId: number;

  @Column("varchar", { name: "link_title", nullable: true, length: 255 })
  linkTitle: string | null;

  @Column("varchar", { name: "link_title_es", nullable: true, length: 255 })
  linkTitleEs: string | null;

  @Column("varchar", { name: "link_title_dk", nullable: true, length: 255 })
  linkTitleDk: string | null;

  @Column("varchar", { name: "link_title_se", nullable: true, length: 255 })
  linkTitleSe: string | null;

  @Column("varchar", { name: "link_title_fi", nullable: true, length: 255 })
  linkTitleFi: string | null;

  @Column("varchar", { name: "link_title_nl", nullable: true, length: 255 })
  linkTitleNl: string | null;

  @Column("varchar", { name: "link_title_it", nullable: true, length: 255 })
  linkTitleIt: string | null;

  @Column("varchar", { name: "link_title_de", nullable: true, length: 255 })
  linkTitleDe: string | null;

  @Column("varchar", { name: "link_title_fr", nullable: true, length: 255 })
  linkTitleFr: string | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 255 })
  linkUrl: string | null;

  @Column("tinyint", {
    name: "link_priority",
    unsigned: true,
    default: () => "'0'",
  })
  linkPriority: number;
}
