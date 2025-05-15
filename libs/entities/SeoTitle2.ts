import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seo_title2", { schema: "ftn_db_main" })
export class SeoTitle2 {
  @PrimaryGeneratedColumn({ type: "int", name: "title_id", unsigned: true })
  titleId: number;

  @Column("varchar", { name: "title_type", nullable: true, length: 32 })
  titleType: string | null;

  @Column("int", {
    name: "title_param_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  titleParamId: number | null;

  @Column("int", {
    name: "title_lang",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  titleLang: number | null;

  @Column("varchar", { name: "title_value", nullable: true, length: 60 })
  titleValue: string | null;

  @Column("varchar", { name: "title_value_es", nullable: true, length: 60 })
  titleValueEs: string | null;

  @Column("varchar", { name: "title_value_dk", nullable: true, length: 60 })
  titleValueDk: string | null;

  @Column("varchar", { name: "title_value_se", nullable: true, length: 60 })
  titleValueSe: string | null;

  @Column("varchar", { name: "title_value_fi", nullable: true, length: 60 })
  titleValueFi: string | null;

  @Column("varchar", { name: "title_value_nl", nullable: true, length: 60 })
  titleValueNl: string | null;

  @Column("varchar", { name: "title_value_it", nullable: true, length: 60 })
  titleValueIt: string | null;

  @Column("varchar", { name: "title_value_de", nullable: true, length: 60 })
  titleValueDe: string | null;

  @Column("varchar", { name: "title_value_fr", nullable: true, length: 60 })
  titleValueFr: string | null;

  @Column("varchar", { name: "description_value", nullable: true, length: 156 })
  descriptionValue: string | null;

  @Column("varchar", {
    name: "description_value_es",
    nullable: true,
    length: 156,
  })
  descriptionValueEs: string | null;

  @Column("varchar", {
    name: "description_value_dk",
    nullable: true,
    length: 156,
  })
  descriptionValueDk: string | null;

  @Column("varchar", {
    name: "description_value_se",
    nullable: true,
    length: 156,
  })
  descriptionValueSe: string | null;

  @Column("varchar", {
    name: "description_value_fi",
    nullable: true,
    length: 156,
  })
  descriptionValueFi: string | null;

  @Column("varchar", {
    name: "description_value_nl",
    nullable: true,
    length: 156,
  })
  descriptionValueNl: string | null;

  @Column("varchar", {
    name: "description_value_it",
    nullable: true,
    length: 156,
  })
  descriptionValueIt: string | null;

  @Column("varchar", {
    name: "description_value_de",
    nullable: true,
    length: 156,
  })
  descriptionValueDe: string | null;

  @Column("varchar", {
    name: "description_value_fr",
    nullable: true,
    length: 156,
  })
  descriptionValueFr: string | null;

  @Column("varchar", { name: "keywords_value", nullable: true, length: 100 })
  keywordsValue: string | null;

  @Column("int", {
    name: "date_updated",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateUpdated: number | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;
}
