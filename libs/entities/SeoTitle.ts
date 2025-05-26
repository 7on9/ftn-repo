import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seo_title", { schema: "ftn_db_main" })
export class SeoTitle {
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

  @Column("varchar", { name: "title_value", nullable: true, length: 100 })
  titleValue: string | null;

  @Column("varchar", { name: "title_value_es", nullable: true, length: 100 })
  titleValueEs: string | null;

  @Column("varchar", { name: "title_value_dk", nullable: true, length: 100 })
  titleValueDk: string | null;

  @Column("varchar", { name: "title_value_se", nullable: true, length: 100 })
  titleValueSe: string | null;

  @Column("varchar", { name: "title_value_fi", nullable: true, length: 100 })
  titleValueFi: string | null;

  @Column("varchar", { name: "title_value_nl", nullable: true, length: 100 })
  titleValueNl: string | null;

  @Column("varchar", { name: "title_value_it", nullable: true, length: 100 })
  titleValueIt: string | null;

  @Column("varchar", { name: "title_value_de", nullable: true, length: 100 })
  titleValueDe: string | null;

  @Column("varchar", { name: "title_value_fr", nullable: true, length: 100 })
  titleValueFr: string | null;

  @Column("varchar", { name: "description_value", nullable: true, length: 200 })
  descriptionValue: string | null;

  @Column("varchar", {
    name: "description_value_es",
    nullable: true,
    length: 200,
  })
  descriptionValueEs: string | null;

  @Column("varchar", {
    name: "description_value_dk",
    nullable: true,
    length: 200,
  })
  descriptionValueDk: string | null;

  @Column("varchar", {
    name: "description_value_se",
    nullable: true,
    length: 200,
  })
  descriptionValueSe: string | null;

  @Column("varchar", {
    name: "description_value_fi",
    nullable: true,
    length: 200,
  })
  descriptionValueFi: string | null;

  @Column("varchar", {
    name: "description_value_nl",
    nullable: true,
    length: 200,
  })
  descriptionValueNl: string | null;

  @Column("varchar", {
    name: "description_value_it",
    nullable: true,
    length: 200,
  })
  descriptionValueIt: string | null;

  @Column("varchar", {
    name: "description_value_de",
    nullable: true,
    length: 200,
  })
  descriptionValueDe: string | null;

  @Column("varchar", {
    name: "description_value_fr",
    nullable: true,
    length: 200,
  })
  descriptionValueFr: string | null;

  @Column("varchar", { name: "keywords_value", nullable: true, length: 100 })
  keywordsValue: string | null;

  @Column("varchar", { name: "keywords_value_es", nullable: true, length: 100 })
  keywordsValueEs: string | null;

  @Column("varchar", { name: "keywords_value_dk", nullable: true, length: 100 })
  keywordsValueDk: string | null;

  @Column("varchar", { name: "keywords_value_se", nullable: true, length: 100 })
  keywordsValueSe: string | null;

  @Column("varchar", { name: "keywords_value_fi", nullable: true, length: 100 })
  keywordsValueFi: string | null;

  @Column("varchar", { name: "keywords_value_nl", nullable: true, length: 100 })
  keywordsValueNl: string | null;

  @Column("varchar", { name: "keywords_value_no", nullable: true, length: 100 })
  keywordsValueNo: string | null;

  @Column("varchar", { name: "keywords_value_it", nullable: true, length: 100 })
  keywordsValueIt: string | null;

  @Column("varchar", { name: "keywords_value_de", nullable: true, length: 100 })
  keywordsValueDe: string | null;

  @Column("varchar", { name: "keywords_value_fr", nullable: true, length: 200 })
  keywordsValueFr: string | null;

  @Column("int", { name: "date_updated", nullable: true, unsigned: true })
  dateUpdated: number | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;
}
