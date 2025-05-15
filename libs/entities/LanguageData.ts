import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("lang_id", ["langId", "langConstant"], { unique: true })
@Entity("language_data", { schema: "ftn_db_main" })
export class LanguageData {
  @PrimaryGeneratedColumn({ type: "int", name: "lang_text_id", unsigned: true })
  langTextId: number;

  @Column("int", { name: "lang_id", default: () => "'0'" })
  langId: number;

  @Column("text", { name: "lang_constant", nullable: true })
  langConstant: string | null;

  @Column("text", { name: "lang_text", nullable: true })
  langText: string | null;

  @Column("tinyint", { name: "is_php", width: 1, default: () => "'0'" })
  isPhp: boolean;

  @Column("tinyint", { name: "is_js", width: 1, default: () => "'0'" })
  isJs: boolean;
}
