import { Column, Entity, Index } from "typeorm";

@Index("mail_id", ["mailId"], { unique: true })
@Entity("sent_mails_body", { schema: "ftn_db_main" })
export class SentMailsBody {
  @Column("int", { name: "mail_id", unsigned: true })
  mailId: number;

  @Column("longtext", { name: "mail_text", nullable: true })
  mailText: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("int", {
    name: "ftl_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  ftlId: number | null;

  @Column("text", { name: "attachment", nullable: true })
  attachment: string | null;
}
