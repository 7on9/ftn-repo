import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ticket_fee_settings", { schema: "ftn_db_main" })
export class TicketFeeSettings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "target_type", nullable: true, length: 50 })
  targetType: string | null;

  @Column("varchar", { name: "target_ids", nullable: true, length: 255 })
  targetIds: string | null;

  @Column("text", { name: "fee_settings", nullable: true })
  feeSettings: string | null;
}
