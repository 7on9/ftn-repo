import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seo_links", { schema: "ftn_db_main" })
export class SeoLinks {
  @PrimaryGeneratedColumn({ type: "int", name: "link_id", unsigned: true })
  linkId: number;

  @Column("int", {
    name: "link_inserted",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  linkInserted: number | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 254 })
  linkUrl: string | null;

  @Column("int", {
    name: "link_timestamp",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  linkTimestamp: number | null;

  @Column("varchar", { name: "link_keyword", nullable: true, length: 128 })
  linkKeyword: string | null;

  @Column("varchar", { name: "extra", nullable: true, length: 254 })
  extra: string | null;

  @Column("varchar", { name: "extra_es", nullable: true, length: 254 })
  extraEs: string | null;

  @Column("varchar", { name: "extra_dk", nullable: true, length: 254 })
  extraDk: string | null;

  @Column("varchar", { name: "extra_se", nullable: true, length: 254 })
  extraSe: string | null;

  @Column("varchar", { name: "extra_fi", nullable: true, length: 254 })
  extraFi: string | null;

  @Column("varchar", { name: "extra_nl", nullable: true, length: 254 })
  extraNl: string | null;

  @Column("varchar", { name: "extra_it", nullable: true, length: 254 })
  extraIt: string | null;

  @Column("varchar", { name: "extra_de", nullable: true, length: 254 })
  extraDe: string | null;

  @Column("varchar", { name: "extra_fr", nullable: true, length: 254 })
  extraFr: string | null;

  @Column("varchar", { name: "link_title", nullable: true, length: 254 })
  linkTitle: string | null;

  @Column("varchar", { name: "link_title_es", nullable: true, length: 254 })
  linkTitleEs: string | null;

  @Column("varchar", { name: "link_title_dk", nullable: true, length: 254 })
  linkTitleDk: string | null;

  @Column("varchar", { name: "link_title_se", nullable: true, length: 254 })
  linkTitleSe: string | null;

  @Column("varchar", { name: "link_title_fi", nullable: true, length: 254 })
  linkTitleFi: string | null;

  @Column("varchar", { name: "link_title_nl", nullable: true, length: 254 })
  linkTitleNl: string | null;

  @Column("varchar", { name: "link_title_it", nullable: true, length: 254 })
  linkTitleIt: string | null;

  @Column("varchar", { name: "link_title_de", nullable: true, length: 254 })
  linkTitleDe: string | null;

  @Column("varchar", { name: "link_title_fr", nullable: true, length: 254 })
  linkTitleFr: string | null;
}
