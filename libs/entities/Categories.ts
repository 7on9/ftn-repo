import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories", { schema: "ftn_db_main" })
export class Categories {
  @PrimaryGeneratedColumn({ type: "int", name: "category_id", unsigned: true })
  categoryId: number;

  @Column("varchar", { name: "category_name", nullable: true, length: 128 })
  categoryName: string | null;

  @Column("varchar", { name: "category_name_es", nullable: true, length: 128 })
  categoryNameEs: string | null;

  @Column("varchar", { name: "category_name_dk", nullable: true, length: 128 })
  categoryNameDk: string | null;

  @Column("varchar", { name: "category_name_se", nullable: true, length: 128 })
  categoryNameSe: string | null;

  @Column("varchar", { name: "category_name_fi", nullable: true, length: 128 })
  categoryNameFi: string | null;

  @Column("varchar", { name: "category_name_nl", nullable: true, length: 128 })
  categoryNameNl: string | null;

  @Column("varchar", { name: "category_name_it", nullable: true, length: 128 })
  categoryNameIt: string | null;

  @Column("varchar", { name: "category_name_de", nullable: true, length: 128 })
  categoryNameDe: string | null;

  @Column("varchar", { name: "category_name_fr", nullable: true, length: 128 })
  categoryNameFr: string | null;

  @Column("varchar", {
    name: "category_description",
    nullable: true,
    length: 255,
  })
  categoryDescription: string | null;

  @Column("varchar", {
    name: "category_description_es",
    nullable: true,
    length: 255,
  })
  categoryDescriptionEs: string | null;

  @Column("varchar", {
    name: "category_description_dk",
    nullable: true,
    length: 255,
  })
  categoryDescriptionDk: string | null;

  @Column("varchar", {
    name: "category_description_se",
    nullable: true,
    length: 255,
  })
  categoryDescriptionSe: string | null;

  @Column("varchar", {
    name: "category_description_fi",
    nullable: true,
    length: 255,
  })
  categoryDescriptionFi: string | null;

  @Column("varchar", {
    name: "category_description_nl",
    nullable: true,
    length: 255,
  })
  categoryDescriptionNl: string | null;

  @Column("varchar", {
    name: "category_description_it",
    nullable: true,
    length: 255,
  })
  categoryDescriptionIt: string | null;

  @Column("varchar", {
    name: "category_description_de",
    nullable: true,
    length: 255,
  })
  categoryDescriptionDe: string | null;

  @Column("varchar", {
    name: "category_description_fr",
    nullable: true,
    length: 255,
  })
  categoryDescriptionFr: string | null;

  @Column("text", { name: "category_extra", nullable: true })
  categoryExtra: string | null;

  @Column("text", { name: "category_extra_es", nullable: true })
  categoryExtraEs: string | null;

  @Column("text", { name: "category_extra_dk", nullable: true })
  categoryExtraDk: string | null;

  @Column("text", { name: "category_extra_se", nullable: true })
  categoryExtraSe: string | null;

  @Column("text", { name: "category_extra_fi", nullable: true })
  categoryExtraFi: string | null;

  @Column("text", { name: "category_extra_nl", nullable: true })
  categoryExtraNl: string | null;

  @Column("text", { name: "category_extra_it", nullable: true })
  categoryExtraIt: string | null;

  @Column("text", { name: "category_extra_de", nullable: true })
  categoryExtraDe: string | null;

  @Column("text", { name: "category_extra_fr", nullable: true })
  categoryExtraFr: string | null;

  @Column("tinyint", {
    name: "category_hospitality",
    width: 1,
    default: () => "'0'",
  })
  categoryHospitality: boolean;

  @Column("varchar", { name: "type", nullable: true, length: 16 })
  type: string | null;

  @Column("tinyint", { name: "active", width: 1, default: () => "'0'" })
  active: boolean;

  @Column("tinyint", {
    name: "is_package",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isPackage: boolean | null;
}
