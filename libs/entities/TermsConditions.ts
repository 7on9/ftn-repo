import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("terms_conditions", { schema: "ftn_db_main" })
export class TermsConditions {
  @PrimaryGeneratedColumn({ type: "int", name: "term_id", unsigned: true })
  termId: number;

  @Column("int", {
    name: "sorter",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sorter: number | null;

  @Column("text", { name: "title", nullable: true })
  title: string | null;

  @Column("text", { name: "title_es", nullable: true })
  titleEs: string | null;

  @Column("text", { name: "title_dk", nullable: true })
  titleDk: string | null;

  @Column("text", { name: "title_se", nullable: true })
  titleSe: string | null;

  @Column("text", { name: "title_fi", nullable: true })
  titleFi: string | null;

  @Column("text", { name: "title_nl", nullable: true })
  titleNl: string | null;

  @Column("text", { name: "title_it", nullable: true })
  titleIt: string | null;

  @Column("text", { name: "title_de", nullable: true })
  titleDe: string | null;

  @Column("text", { name: "title_fr", nullable: true })
  titleFr: string | null;

  @Column("text", { name: "text", nullable: true })
  text: string | null;

  @Column("text", { name: "text_es", nullable: true })
  textEs: string | null;

  @Column("text", { name: "text_dk", nullable: true })
  textDk: string | null;

  @Column("text", { name: "text_se", nullable: true })
  textSe: string | null;

  @Column("text", { name: "text_fi", nullable: true })
  textFi: string | null;

  @Column("text", { name: "text_nl", nullable: true })
  textNl: string | null;

  @Column("text", { name: "text_it", nullable: true })
  textIt: string | null;

  @Column("text", { name: "text_de", nullable: true })
  textDe: string | null;

  @Column("text", { name: "text_fr", nullable: true })
  textFr: string | null;

  @Column("int", {
    name: "lang",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  lang: number | null;

  @Column("tinyint", { name: "display", nullable: true })
  display: number | null;
}
