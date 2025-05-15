import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("link_header_old_db", { schema: "ftn_db_main" })
export class LinkHeaderOldDb {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "link_id", unsigned: true })
  linkId: number;

  @Column("varchar", { name: "link_title", nullable: true, length: 255 })
  linkTitle: string | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 255 })
  linkUrl: string | null;

  @Column("tinyint", { name: "link_priority", nullable: true, unsigned: true })
  linkPriority: number | null;
}
