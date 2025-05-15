import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pattern_name", ["patternName"], {})
@Index("pattgern_lang", ["patternLang"], {})
@Entity("pattern", { schema: "ftn_db_main" })
export class Pattern {
  @PrimaryGeneratedColumn({ type: "int", name: "pattern_id" })
  patternId: number;

  @Column("varchar", { name: "pattern_name", nullable: true, length: 255 })
  patternName: string | null;

  @Column("text", { name: "pattern_value", nullable: true })
  patternValue: string | null;

  @Column("int", {
    name: "pattern_lang",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  patternLang: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;
}
