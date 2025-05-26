import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bots", { schema: "ftn_db_main" })
export class Bots {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "string", nullable: true, length: 32 })
  string: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 32 })
  name: string | null;
}
