import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("eticket_evidence", { schema: "ftn_db_main" })
export class EticketEvidence {
  @PrimaryGeneratedColumn({ type: "int", name: "eticket_evidence_id" })
  eticketEvidenceId: number;

  @Column("int", { name: "admin_id", nullable: true })
  adminId: number | null;

  @Column("varchar", { name: "admin_type", length: 10 })
  adminType: string;

  @Column("int", { name: "event_id", nullable: true })
  eventId: number | null;

  @Column("int", { name: "order_id", nullable: true })
  orderId: number | null;

  @Column("int", { name: "timestamp", nullable: true })
  timestamp: number | null;

  @Column("varchar", { name: "file", nullable: true, length: 255 })
  file: string | null;
}
