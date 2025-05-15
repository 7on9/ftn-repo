import { Column, Entity } from "typeorm";

@Entity("temp", { schema: "ftn_db_main" })
export class Temp {
  @Column("text", { name: "temp_cell", nullable: true })
  tempCell: string | null;
}
