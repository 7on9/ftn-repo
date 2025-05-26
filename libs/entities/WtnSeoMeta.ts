import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("seo_type", ["seoType", "seoTypeId"], {})
@Entity("wtn_seo_meta", { schema: "ftn_db_main" })
export class WtnSeoMeta {
  @PrimaryGeneratedColumn({ type: "int", name: "seo_id", unsigned: true })
  seoId: number;

  @Column("varchar", { name: "seo_type", nullable: true, length: 64 })
  seoType: string | null;

  @Column("int", {
    name: "seo_type_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  seoTypeId: number | null;

  @Column("text", { name: "seo_title", nullable: true })
  seoTitle: string | null;

  @Column("text", { name: "seo_description", nullable: true })
  seoDescription: string | null;

  @Column("text", { name: "seo_keywords", nullable: true })
  seoKeywords: string | null;

  @Column("smallint", {
    name: "seo_admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  seoAdminId: number | null;

  @Column("int", {
    name: "seo_date_created",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  seoDateCreated: number | null;
}
