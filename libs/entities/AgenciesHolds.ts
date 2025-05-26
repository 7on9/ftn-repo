import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("agencies_holds", { schema: "ftn_db_main" })
export class AgenciesHolds {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "agency_id" })
  agencyId: number;

  @Column("int", { name: "ticket_id" })
  ticketId: number;

  @Column("int", { name: "lock_id" })
  lockId: number;

  @Column("int", { name: "created_at", default: () => "'0'" })
  createdAt: number;
}
