import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email_id", ["emailId"], {})
@Entity("manage_emails_comments", { schema: "ftn_db_main" })
export class ManageEmailsComments {
  @PrimaryGeneratedColumn({ type: "int", name: "comment_id", unsigned: true })
  commentId: number;

  @Column("int", { name: "email_id", unsigned: true, default: () => "'0'" })
  emailId: number;

  @Column("int", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("int", { name: "created_date", unsigned: true, default: () => "'0'" })
  createdDate: number;

  @Column("text", { name: "comment_text", nullable: true })
  commentText: string | null;
}
