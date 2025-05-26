import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("var_name", ["varName"], {})
@Entity("vars", { schema: "ftn_db_main" })
export class Vars {
  @PrimaryGeneratedColumn({ type: "smallint", name: "var_id", unsigned: true })
  varId: number;

  @Column("varchar", { name: "var_name", nullable: true, length: 255 })
  varName: string | null;

  @Column("mediumtext", { name: "var_value", nullable: true })
  varValue: string | null;

  @Column("varchar", { name: "var_setting_group", nullable: true, length: 255 })
  varSettingGroup: string | null;

  @Column("varchar", {
    name: "var_setting_description",
    nullable: true,
    length: 1024,
  })
  varSettingDescription: string | null;
}
