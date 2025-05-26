import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("seo_content_name", ["contentName"], {})
@Entity("seo_content", { schema: "ftn_db_main" })
export class SeoContent {
  @PrimaryGeneratedColumn({
    type: "smallint",
    name: "content_id",
    unsigned: true,
  })
  contentId: number;

  @Column("varchar", { name: "content_name", nullable: true, length: 64 })
  contentName: string | null;

  @Column("varchar", { name: "content_title", nullable: true, length: 128 })
  contentTitle: string | null;

  @Column("varchar", { name: "content_title_es", nullable: true, length: 128 })
  contentTitleEs: string | null;

  @Column("varchar", { name: "content_title_dk", nullable: true, length: 128 })
  contentTitleDk: string | null;

  @Column("varchar", { name: "content_title_se", nullable: true, length: 128 })
  contentTitleSe: string | null;

  @Column("varchar", { name: "content_title_fi", nullable: true, length: 128 })
  contentTitleFi: string | null;

  @Column("varchar", { name: "content_title_nl", nullable: true, length: 128 })
  contentTitleNl: string | null;

  @Column("varchar", { name: "content_title_it", nullable: true, length: 128 })
  contentTitleIt: string | null;

  @Column("varchar", { name: "content_title_de", nullable: true, length: 128 })
  contentTitleDe: string | null;

  @Column("varchar", { name: "content_title_fr", nullable: true, length: 128 })
  contentTitleFr: string | null;

  @Column("varchar", { name: "content_title_pr", nullable: true, length: 128 })
  contentTitlePr: string | null;

  @Column("text", { name: "content_text", nullable: true })
  contentText: string | null;

  @Column("text", { name: "content_text_es", nullable: true })
  contentTextEs: string | null;

  @Column("text", { name: "content_text_dk", nullable: true })
  contentTextDk: string | null;

  @Column("text", { name: "content_text_se", nullable: true })
  contentTextSe: string | null;

  @Column("text", { name: "content_text_fi", nullable: true })
  contentTextFi: string | null;

  @Column("text", { name: "content_text_nl", nullable: true })
  contentTextNl: string | null;

  @Column("text", { name: "content_text_it", nullable: true })
  contentTextIt: string | null;

  @Column("text", { name: "content_text_de", nullable: true })
  contentTextDe: string | null;

  @Column("text", { name: "content_text_fr", nullable: true })
  contentTextFr: string | null;

  @Column("text", { name: "content_text_pr", nullable: true })
  contentTextPr: string | null;

  @Column("int", {
    name: "content_lang",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  contentLang: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 32 })
  type: string | null;

  @Column("int", { name: "team_id", nullable: true, default: () => "'0'" })
  teamId: number | null;

  @Column("int", { name: "feed_time", nullable: true, default: () => "'0'" })
  feedTime: number | null;

  @Column("varchar", { name: "feed_desc", nullable: true, length: 150 })
  feedDesc: string | null;

  @Column("varchar", { name: "feed_desc_es", nullable: true, length: 150 })
  feedDescEs: string | null;

  @Column("varchar", { name: "feed_desc_dk", nullable: true, length: 150 })
  feedDescDk: string | null;

  @Column("varchar", { name: "feed_desc_se", nullable: true, length: 150 })
  feedDescSe: string | null;

  @Column("varchar", { name: "feed_desc_fi", nullable: true, length: 150 })
  feedDescFi: string | null;

  @Column("varchar", { name: "feed_desc_nl", nullable: true, length: 150 })
  feedDescNl: string | null;

  @Column("varchar", { name: "feed_desc_it", nullable: true, length: 150 })
  feedDescIt: string | null;

  @Column("varchar", { name: "feed_desc_de", nullable: true, length: 150 })
  feedDescDe: string | null;

  @Column("varchar", { name: "feed_desc_fr", nullable: true, length: 150 })
  feedDescFr: string | null;

  @Column("varchar", { name: "feed_desc_pr", nullable: true, length: 150 })
  feedDescPr: string | null;

  @Column("varchar", { name: "feed_link", nullable: true, length: 250 })
  feedLink: string | null;

  @Column("varchar", { name: "feed_img", nullable: true, length: 512 })
  feedImg: string | null;
}
