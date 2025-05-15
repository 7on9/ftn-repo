import { Column, Entity, Index } from "typeorm";

@Index("team_id", ["teamId"], {})
@Entity("player_info_tables", { schema: "ftn_db_main" })
export class PlayerInfoTables {
  @Column("int", { name: "team_id", nullable: true, default: () => "'0'" })
  teamId: number | null;

  @Column("int", { name: "row_id", nullable: true, default: () => "'0'" })
  rowId: number | null;

  @Column("int", { name: "column_id", nullable: true, default: () => "'0'" })
  columnId: number | null;

  @Column("varchar", { name: "value", nullable: true, length: 255 })
  value: string | null;
}
