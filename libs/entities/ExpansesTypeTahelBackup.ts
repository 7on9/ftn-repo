import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("expanses_type_tahel_backup", { schema: "ftn_db_main" })
export class ExpansesTypeTahelBackup {
  @PrimaryGeneratedColumn({ type: "smallint", name: "et_id", unsigned: true })
  etId: number;

  @Column("varchar", { name: "et_title", nullable: true, length: 128 })
  etTitle: string | null;
}
