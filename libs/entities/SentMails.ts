import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("sent_mails", { schema: "ftn_db_main" })
export class SentMails {
  @PrimaryGeneratedColumn({ type: "int", name: "mail_id", unsigned: true })
  mailId: number;

  @Column("int", {
    name: "user_sending",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  userSending: number | null;

  @Column("varchar", { name: "mail_from", nullable: true, length: 254 })
  mailFrom: string | null;

  @Column("varchar", { name: "mail_to", nullable: true, length: 254 })
  mailTo: string | null;

  @Column("varchar", { name: "mail_key", nullable: true, length: 128 })
  mailKey: string | null;

  @Column("varchar", { name: "mail_subject", nullable: true, length: 254 })
  mailSubject: string | null;

  @Column("int", {
    name: "date_sent",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateSent: number | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("int", {
    name: "ftl_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  ftlId: number | null;
}
