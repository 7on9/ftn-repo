import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sorter", ["sorter"], {})
@Index("lang", ["lang"], {})
@Entity("terms_conditions_old_db", { schema: "ftn_db_main" })
export class TermsConditionsOldDb {
  @PrimaryGeneratedColumn({ type: "int", name: "term_id", unsigned: true })
  termId: number;

  @Column("int", { name: "sorter", nullable: true, unsigned: true })
  sorter: number | null;

  @Column("text", { name: "title", nullable: true })
  title: string | null;

  @Column("text", { name: "text", nullable: true })
  text: string | null;

  @Column("int", { name: "lang", nullable: true, unsigned: true })
  lang: number | null;
}
