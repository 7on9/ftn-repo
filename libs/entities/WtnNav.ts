import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("wtn_nav", { schema: "ftn_db_main" })
export class WtnNav {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("varchar", { name: "scope", nullable: true, length: 32 })
  scope: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 32 })
  title: string | null;

  @Column("text", { name: "array", nullable: true })
  array: string | null;
}
