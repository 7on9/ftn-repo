import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("var_name", ["varName"], {})
@Entity("vars_ftl", { schema: "ftn_db_main" })
export class VarsFtl {
  @PrimaryGeneratedColumn({ type: "smallint", name: "var_id", unsigned: true })
  varId: number;

  @Column("varchar", { name: "var_name", nullable: true, length: 255 })
  varName: string | null;

  @Column("varchar", { name: "var_value", nullable: true, length: 255 })
  varValue: string | null;
}
