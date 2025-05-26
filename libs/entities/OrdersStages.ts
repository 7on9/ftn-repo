import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("orders_stages", { schema: "ftn_db_main" })
export class OrdersStages {
  @PrimaryGeneratedColumn({ type: "int", name: "stage_id" })
  stageId: number;

  @Column("varchar", { name: "stage_name", nullable: true, length: 255 })
  stageName: string | null;
}
