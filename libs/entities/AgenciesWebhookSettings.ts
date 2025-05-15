import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("agencies_webhook_settings", { schema: "ftn_db_main" })
export class AgenciesWebhookSettings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "agency_id" })
  agencyId: number;

  @Column("varchar", { name: "event", length: 100 })
  event: string;

  @Column("varchar", { name: "url", length: 1000 })
  url: string;

  @Column("varchar", { name: "auth_type", nullable: true, length: 50 })
  authType: string | null;

  @Column("varchar", { name: "auth_secret", nullable: true, length: 512 })
  authSecret: string | null;

  @Column("int", { name: "created_at", unsigned: true })
  createdAt: number;
}
