import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tixstock_tickets", { schema: "ftn_db_main" })
export class TixstockTickets {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "listing_id", length: 50 })
  listingId: string;

  @Column("int", { name: "ticket_id" })
  ticketId: number;
}
