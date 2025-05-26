import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("manage_campaign", { schema: "ftn_db_main" })
export class ManageCampaign {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "campaign_name", nullable: true, length: 150 })
  campaignName: string | null;

  @Column("text", { name: "campaign_script", nullable: true })
  campaignScript: string | null;

  @Column("int", { name: "active", default: () => "'1'" })
  active: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
}
