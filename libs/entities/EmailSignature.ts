import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_signature", { schema: "ftn_db_main" })
export class EmailSignature {
  @PrimaryGeneratedColumn({ type: "int", name: "signature_id" })
  signatureId: number;

  @Column("varchar", { name: "signature_name", nullable: true, length: 255 })
  signatureName: string | null;

  @Column("text", { name: "signature_text", nullable: true })
  signatureText: string | null;

  @Column("varchar", {
    name: "signature_department",
    nullable: true,
    length: 255,
  })
  signatureDepartment: string | null;
}
