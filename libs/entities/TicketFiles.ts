import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ticket_id", ["ticketId"], {})
@Entity("ticket_files", { schema: "ftn_db_main" })
export class TicketFiles {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "ticket_id", unsigned: true, default: () => "'0'" })
  ticketId: number;

  @Column("text", { name: "file_name", nullable: true })
  fileName: string | null;

  @Column("tinyint", { name: "no_block", nullable: true, default: () => "'0'" })
  noBlock: number | null;

  @Column("tinyint", {
    name: "is_mobile",
    nullable: true,
    default: () => "'0'",
  })
  isMobile: number | null;

  @Column("tinyint", { name: "is_pdf", nullable: true, default: () => "'0'" })
  isPdf: number | null;

  @Column("tinyint", {
    name: "is_pkpass",
    nullable: true,
    default: () => "'0'",
  })
  isPkpass: number | null;

  @Column("tinyint", { name: "is_link", nullable: true, default: () => "'0'" })
  isLink: number | null;

  @Column("tinyint", {
    name: "is_processed",
    nullable: true,
    default: () => "'0'",
  })
  isProcessed: number | null;

  @Column("varchar", { name: "file_type", nullable: true, length: 20 })
  fileType: string | null;

  @Column("int", { name: "time_stamp", unsigned: true, default: () => "'0'" })
  timeStamp: number;
}
