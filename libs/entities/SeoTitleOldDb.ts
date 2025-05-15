import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("title_type", ["titleType", "titleParamId"], {})
@Index("title_lang", ["titleLang"], {})
@Entity("seo_title_old_db", { schema: "ftn_db_main" })
export class SeoTitleOldDb {
  @PrimaryGeneratedColumn({ type: "int", name: "title_id", unsigned: true })
  titleId: number;

  @Column("varchar", { name: "title_type", nullable: true, length: 32 })
  titleType: string | null;

  @Column("int", { name: "title_param_id", nullable: true, unsigned: true })
  titleParamId: number | null;

  @Column("int", { name: "title_lang", nullable: true, unsigned: true })
  titleLang: number | null;

  @Column("varchar", { name: "title_value", nullable: true, length: 100 })
  titleValue: string | null;

  @Column("varchar", { name: "description_value", nullable: true, length: 200 })
  descriptionValue: string | null;

  @Column("varchar", { name: "keywords_value", nullable: true, length: 100 })
  keywordsValue: string | null;

  @Column("int", { name: "date_updated", nullable: true, unsigned: true })
  dateUpdated: number | null;

  @Column("int", { name: "admin_id", nullable: true, unsigned: true })
  adminId: number | null;
}
