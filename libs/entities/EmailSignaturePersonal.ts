import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_signature_personal", { schema: "ftn_db_main" })
export class EmailSignaturePersonal {
  @PrimaryGeneratedColumn({ type: "int", name: "signature_personal_id" })
  signaturePersonalId: number;

  @Column("int", { name: "admin_id", nullable: true })
  adminId: number | null;

  @Column("varchar", {
    name: "signature_personal_name",
    nullable: true,
    length: 255,
  })
  signaturePersonalName: string | null;

  @Column("text", { name: "signature_personal_text", nullable: true })
  signaturePersonalText: string | null;

  @Column("tinyint", { name: "signature_personal_active", nullable: true })
  signaturePersonalActive: number | null;
}
