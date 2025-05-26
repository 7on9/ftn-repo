import { Column, Entity, Index } from "typeorm";

@Index("ticket_type_id", ["ticketTypeId"], { unique: true })
@Entity("ticket_type_category", { schema: "ftn_db_main" })
export class TicketTypeCategory {
  @Column("tinyint", { name: "ticket_type_id", width: 1 })
  ticketTypeId: boolean;

  @Column("varchar", { name: "ticket_type_name", length: 100 })
  ticketTypeName: string;

  @Column("varchar", { name: "ticket_type_text", nullable: true, length: 255 })
  ticketTypeText: string | null;

  @Column("varchar", { name: "ticket_type_icon", nullable: true, length: 255 })
  ticketTypeIcon: string | null;

  @Column("tinyint", { name: "ticket_type_active", nullable: true, width: 1 })
  ticketTypeActive: boolean | null;
}
