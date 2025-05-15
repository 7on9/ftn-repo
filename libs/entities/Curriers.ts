import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("curriers", { schema: "ftn_db_main" })
export class Curriers {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 256 })
  name: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 256 })
  website: string | null;
}
