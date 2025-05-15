import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("contact_email", ["contactEmail"], {})
@Entity("contact_us", { schema: "ftn_db_main" })
export class ContactUs {
  @PrimaryGeneratedColumn({ type: "int", name: "contact_id", unsigned: true })
  contactId: number;

  @Column("varchar", { name: "contact_name", nullable: true, length: 254 })
  contactName: string | null;

  @Column("varchar", { name: "contact_email", nullable: true, length: 254 })
  contactEmail: string | null;

  @Column("varchar", { name: "contact_phone", nullable: true, length: 254 })
  contactPhone: string | null;

  @Column("text", { name: "contact_message", nullable: true })
  contactMessage: string | null;

  @Column("int", { name: "contact_date", unsigned: true, default: () => "'0'" })
  contactDate: number;

  @Column("varchar", { name: "ip_address", nullable: true, length: 16 })
  ipAddress: string | null;

  @Column("tinyint", {
    name: "message_read",
    unsigned: true,
    default: () => "'0'",
  })
  messageRead: number;
}
