import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tixstock_data_mapping", { schema: "ftn_db_main" })
export class TixstockDataMapping {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "tixstock_id", nullable: true, length: 128 })
  tixstockId: string | null;

  @Column("int", { name: "parent_id", nullable: true })
  parentId: number | null;

  @Column("varchar", { name: "data_type", nullable: true, length: 50 })
  dataType: string | null;

  @Column("varchar", { name: "tixstock_name", nullable: true, length: 250 })
  tixstockName: string | null;

  @Column("int", { name: "data_id", nullable: true })
  dataId: number | null;

  @Column("tinyint", { name: "status", nullable: true, default: () => "'1'" })
  status: number | null;

  @Column("int", { name: "event_date", nullable: true })
  eventDate: number | null;

  @Column("text", { name: "extra", nullable: true })
  extra: string | null;
}
