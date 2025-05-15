import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sorter", ["sorter"], {})
@Index("lang", ["lang"], {})
@Entity("faq_old_db", { schema: "ftn_db_main" })
export class FaqOldDb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("text", { name: "q", nullable: true })
  q: string | null;

  @Column("text", { name: "a", nullable: true })
  a: string | null;

  @Column("int", { name: "sorter", nullable: true, unsigned: true })
  sorter: number | null;

  @Column("int", { name: "lang", nullable: true, unsigned: true })
  lang: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 32 })
  type: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 255 })
  category: string | null;
}
