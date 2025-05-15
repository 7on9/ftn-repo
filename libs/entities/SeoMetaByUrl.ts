import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seo_meta_by_url", { schema: "ftn_db_main" })
export class SeoMetaByUrl {
  @PrimaryGeneratedColumn({ type: "int", name: "seo_id", unsigned: true })
  seoId: number;

  @Column("varchar", { name: "seo_url", nullable: true, length: 254 })
  seoUrl: string | null;

  @Column("varchar", { name: "seo_title", nullable: true, length: 70 })
  seoTitle: string | null;

  @Column("varchar", { name: "seo_description", nullable: true, length: 160 })
  seoDescription: string | null;

  @Column("mediumint", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "date_added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateAdded: number | null;
}
