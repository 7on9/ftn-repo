import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("seo_type", ["seoType", "seoTypeId"], {})
@Entity("seo_meta_old_db", { schema: "ftn_db_main" })
export class SeoMetaOldDb {
  @PrimaryGeneratedColumn({ type: "int", name: "seo_id", unsigned: true })
  seoId: number;

  @Column("varchar", { name: "seo_type", nullable: true, length: 64 })
  seoType: string | null;

  @Column("int", { name: "seo_type_id", nullable: true, unsigned: true })
  seoTypeId: number | null;

  @Column("varchar", { name: "seo_title", nullable: true, length: 254 })
  seoTitle: string | null;

  @Column("varchar", { name: "seo_description", nullable: true, length: 254 })
  seoDescription: string | null;

  @Column("smallint", { name: "seo_admin_id", nullable: true, unsigned: true })
  seoAdminId: number | null;

  @Column("int", { name: "seo_date_created", nullable: true, unsigned: true })
  seoDateCreated: number | null;
}
