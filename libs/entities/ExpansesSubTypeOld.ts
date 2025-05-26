import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("et_type", ["estType"], {})
@Entity("expanses_sub_type_old", { schema: "ftn_db_main" })
export class ExpansesSubTypeOld {
  @PrimaryGeneratedColumn({ type: "smallint", name: "est_id", unsigned: true })
  estId: number;

  @Column("varchar", { name: "est_title", nullable: true, length: 128 })
  estTitle: string | null;

  @Column("int", { name: "est_type", unsigned: true, default: () => "'0'" })
  estType: number;
}
