import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("content_title", ["contentTitle"], {})
@Index("content_lang", ["contentLang"], {})
@Index("content_name", ["contentName"], {})
@Index("team_id", ["teamId"], {})
@Index("feed_time", ["feedTime"], {})
@Index("type", ["type"], {})
@Entity("seo_content_old_db", { schema: "ftn_db_main" })
export class SeoContentOldDb {
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

  @Column("text", { name: "content_text", nullable: true })
  contentText: string | null;

  @Column("int", { name: "content_lang", nullable: true, unsigned: true })
  contentLang: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 32 })
  type: string | null;

  @Column("int", { name: "team_id", nullable: true })
  teamId: number | null;

  @Column("int", { name: "feed_time", nullable: true })
  feedTime: number | null;

  @Column("varchar", { name: "feed_desc", nullable: true, length: 150 })
  feedDesc: string | null;

  @Column("varchar", { name: "feed_link", nullable: true, length: 250 })
  feedLink: string | null;

  @Column("varchar", { name: "feed_img", nullable: true, length: 512 })
  feedImg: string | null;
}
