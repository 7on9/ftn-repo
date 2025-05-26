import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("agencies_webhook_queues", { schema: "ftn_db_main" })
export class AgenciesWebhookQueues {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "agency_id", nullable: true, default: () => "'0'" })
  agencyId: number | null;

  @Column("varchar", { name: "event", length: 100 })
  event: string;

  @Column("text", { name: "payload", nullable: true })
  payload: string | null;

  @Column("varchar", { name: "status", length: 64 })
  status: string;

  @Column("int", { name: "updated_at", default: () => "'0'" })
  updatedAt: number;

  @Column("int", { name: "created_at", default: () => "'0'" })
  createdAt: number;
}
