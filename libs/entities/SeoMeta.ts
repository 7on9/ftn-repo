import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seo_meta", { schema: "ftn_db_main" })
export class SeoMeta {
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

  @Column("varchar", { name: "seo_title", nullable: true, length: 254 })
  seoTitle: string | null;

  @Column("varchar", { name: "seo_title_es", nullable: true, length: 254 })
  seoTitleEs: string | null;

  @Column("varchar", { name: "seo_title_dk", nullable: true, length: 254 })
  seoTitleDk: string | null;

  @Column("varchar", { name: "seo_title_se", nullable: true, length: 254 })
  seoTitleSe: string | null;

  @Column("varchar", { name: "seo_title_fi", nullable: true, length: 254 })
  seoTitleFi: string | null;

  @Column("varchar", { name: "seo_title_nl", nullable: true, length: 254 })
  seoTitleNl: string | null;

  @Column("varchar", { name: "seo_title_it", nullable: true, length: 254 })
  seoTitleIt: string | null;

  @Column("varchar", { name: "seo_title_de", nullable: true, length: 254 })
  seoTitleDe: string | null;

  @Column("varchar", { name: "seo_title_fr", nullable: true, length: 254 })
  seoTitleFr: string | null;

  @Column("varchar", { name: "seo_description", nullable: true, length: 254 })
  seoDescription: string | null;

  @Column("varchar", {
    name: "seo_description_es",
    nullable: true,
    length: 254,
  })
  seoDescriptionEs: string | null;

  @Column("varchar", {
    name: "seo_description_dk",
    nullable: true,
    length: 254,
  })
  seoDescriptionDk: string | null;

  @Column("varchar", {
    name: "seo_description_se",
    nullable: true,
    length: 254,
  })
  seoDescriptionSe: string | null;

  @Column("varchar", {
    name: "seo_description_fi",
    nullable: true,
    length: 254,
  })
  seoDescriptionFi: string | null;

  @Column("varchar", {
    name: "seo_description_nl",
    nullable: true,
    length: 254,
  })
  seoDescriptionNl: string | null;

  @Column("varchar", {
    name: "seo_description_it",
    nullable: true,
    length: 254,
  })
  seoDescriptionIt: string | null;

  @Column("varchar", {
    name: "seo_description_de",
    nullable: true,
    length: 254,
  })
  seoDescriptionDe: string | null;

  @Column("varchar", {
    name: "seo_description_fr",
    nullable: true,
    length: 254,
  })
  seoDescriptionFr: string | null;

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
