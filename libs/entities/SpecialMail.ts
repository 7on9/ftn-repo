import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("special_mail", { schema: "ftn_db_main" })
export class SpecialMail {
  @PrimaryGeneratedColumn({ type: "int", name: "mail_id" })
  mailId: number;

  @Column("int", { name: "order_id", nullable: true, default: () => "'0'" })
  orderId: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 256 })
  subject: string | null;

  @Column("text", { name: "message", nullable: true })
  message: string | null;

  @Column("int", { name: "date_added", nullable: true, default: () => "'0'" })
  dateAdded: number | null;

  @Column("tinyint", { name: "confirmed", default: () => "'0'" })
  confirmed: number;

  @Column("int", { name: "sent", nullable: true, default: () => "'0'" })
  sent: number | null;

  @Column("int", { name: "admin_id", nullable: true, default: () => "'0'" })
  adminId: number | null;

  @Column("tinyint", { name: "reviewer_seen", width: 1, default: () => "'0'" })
  reviewerSeen: boolean;

  @Column("tinyint", { name: "admin_seen", width: 1, default: () => "'0'" })
  adminSeen: boolean;
}
