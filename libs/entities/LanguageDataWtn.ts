import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("language_data_wtn", { schema: "ftn_db_main" })
export class LanguageDataWtn {
  @PrimaryGeneratedColumn({ type: "int", name: "lang_text_id", unsigned: true })
  langTextId: number;

  @Column("int", { name: "lang_id", default: () => "'0'" })
  langId: number;

  @Column("text", { name: "lang_constant", nullable: true })
  langConstant: string | null;

  @Column("text", { name: "lang_text", nullable: true })
  langText: string | null;
}
