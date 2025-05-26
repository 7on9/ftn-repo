import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("faq", { schema: "ftn_db_main" })
export class Faq {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("text", { name: "q", nullable: true })
  q: string | null;

  @Column("text", { name: "q_es", nullable: true })
  qEs: string | null;

  @Column("text", { name: "q_dk", nullable: true })
  qDk: string | null;

  @Column("text", { name: "q_se", nullable: true })
  qSe: string | null;

  @Column("text", { name: "q_fi", nullable: true })
  qFi: string | null;

  @Column("text", { name: "q_nl", nullable: true })
  qNl: string | null;

  @Column("text", { name: "q_it", nullable: true })
  qIt: string | null;

  @Column("text", { name: "q_de", nullable: true })
  qDe: string | null;

  @Column("text", { name: "q_fr", nullable: true })
  qFr: string | null;

  @Column("text", { name: "a", nullable: true })
  a: string | null;

  @Column("text", { name: "a_es", nullable: true })
  aEs: string | null;

  @Column("text", { name: "a_dk", nullable: true })
  aDk: string | null;

  @Column("text", { name: "a_se", nullable: true })
  aSe: string | null;

  @Column("text", { name: "a_fi", nullable: true })
  aFi: string | null;

  @Column("text", { name: "a_nl", nullable: true })
  aNl: string | null;

  @Column("text", { name: "a_it", nullable: true })
  aIt: string | null;

  @Column("text", { name: "a_de", nullable: true })
  aDe: string | null;

  @Column("text", { name: "a_fr", nullable: true })
  aFr: string | null;

  @Column("int", { name: "sorter", unsigned: true, default: () => "'0'" })
  sorter: number;

  @Column("int", { name: "lang", unsigned: true, default: () => "'0'" })
  lang: number;

  @Column("varchar", { name: "type", nullable: true, length: 32 })
  type: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 255 })
  category: string | null;
}
