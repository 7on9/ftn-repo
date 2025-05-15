import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("free_text", { schema: "ftn_db_main" })
export class FreeText {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("text", { name: "text", nullable: true })
  text: string | null;

  @Column("int", { name: "time", unsigned: true, default: () => "'0'" })
  time: number;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;
}
