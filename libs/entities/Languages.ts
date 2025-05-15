import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("lang_editable", ["langEditable"], {})
@Index("lang_live", ["langLive"], {})
@Index("lang_admin", ["langAdmin"], {})
@Entity("languages", { schema: "ftn_db_main" })
export class Languages {
  @PrimaryGeneratedColumn({ type: "int", name: "lang_id" })
  langId: number;

  @Column("varchar", { name: "lang_name", nullable: true, length: 50 })
  langName: string | null;

  @Column("varchar", { name: "lang_file", nullable: true, length: 32 })
  langFile: string | null;

  @Column("tinyint", { name: "lang_editable", width: 1, default: () => "'0'" })
  langEditable: boolean;

  @Column("tinyint", { name: "lang_live", width: 1, default: () => "'0'" })
  langLive: boolean;

  @Column("varchar", { name: "lang_tld", nullable: true, length: 6 })
  langTld: string | null;

  @Column("varchar", { name: "lang_code", nullable: true, length: 3 })
  langCode: string | null;

  @Column("varchar", { name: "lang_flag", nullable: true, length: 16 })
  langFlag: string | null;

  @Column("varchar", { name: "lang_locale", nullable: true, length: 16 })
  langLocale: string | null;

  @Column("varchar", { name: "lang_gtm", nullable: true, length: 16 })
  langGtm: string | null;

  @Column("int", { name: "lang_admin", unsigned: true, default: () => "'0'" })
  langAdmin: number;

  @Column("varchar", { name: "lang_ga4", nullable: true, length: 16 })
  langGa4: string | null;

  @Column("varchar", { name: "google_ads_label", nullable: true, length: 16 })
  googleAdsLabel: string | null;

  @Column("varchar", {
    name: "google_ads_conversion_id",
    nullable: true,
    length: 16,
  })
  googleAdsConversionId: string | null;
}
