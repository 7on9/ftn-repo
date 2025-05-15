import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("lang_id", ["langId"], {})
@Index("type", ["type"], {})
@Index("type_id", ["typeId"], {})
@Entity("language_names", { schema: "ftn_db_main" })
export class LanguageNames {
  @PrimaryGeneratedColumn({ type: "int", name: "name_id", unsigned: true })
  nameId: number;

  @Column("int", { name: "lang_id", unsigned: true, default: () => "'0'" })
  langId: number;

  @Column("varchar", { name: "type", nullable: true, length: 32 })
  type: string | null;

  @Column("int", { name: "type_id", default: () => "'0'" })
  typeId: number;

  @Column("varchar", { name: "value", nullable: true, length: 128 })
  value: string | null;
}
