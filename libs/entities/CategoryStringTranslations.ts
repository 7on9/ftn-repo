import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("orig_text", ["origText"], {})
@Index("lang_id", ["langId"], {})
@Entity("category_string_translations", { schema: "ftn_db_main" })
export class CategoryStringTranslations {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "orig_text", nullable: true, length: 32 })
  origText: string | null;

  @Column("text", { name: "translation", nullable: true })
  translation: string | null;

  @Column("int", { name: "lang_id", unsigned: true, default: () => "'0'" })
  langId: number;
}
