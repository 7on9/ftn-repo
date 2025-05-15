import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["email"], { unique: true })
@Index("email_id", ["emailId"], {})
@Entity("hr_emails", { schema: "ftn_db_main" })
export class HrEmails {
  @PrimaryGeneratedColumn({ type: "int", name: "email_id" })
  emailId: number;

  @Column("varchar", {
    name: "email",
    nullable: true,
    unique: true,
    length: 50,
  })
  email: string | null;
}
