import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seo_links_old_db", { schema: "ftn_db_main" })
export class SeoLinksOldDb {
  @PrimaryGeneratedColumn({ type: "int", name: "link_id", unsigned: true })
  linkId: number;

  @Column("int", { name: "link_inserted", nullable: true, unsigned: true })
  linkInserted: number | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 254 })
  linkUrl: string | null;

  @Column("int", { name: "link_timestamp", nullable: true, unsigned: true })
  linkTimestamp: number | null;

  @Column("varchar", { name: "link_keyword", nullable: true, length: 128 })
  linkKeyword: string | null;

  @Column("varchar", { name: "extra", nullable: true, length: 254 })
  extra: string | null;

  @Column("varchar", { name: "link_title", nullable: true, length: 254 })
  linkTitle: string | null;
}
