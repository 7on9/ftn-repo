import { Column, Entity } from "typeorm";

@Entity("temp_details", { schema: "ftn_db_main" })
export class TempDetails {
  @Column("varchar", { name: "t_schema", length: 45 })
  tSchema: string;

  @Column("varchar", { name: "t_table", length: 45 })
  tTable: string;

  @Column("varchar", { name: "t_field", length: 45 })
  tField: string;
}
