import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["email", "supplierId"], { unique: true })
@Entity("purchase_emails", { schema: "ftn_db_main" })
export class PurchaseEmails {
  @PrimaryGeneratedColumn({ type: "int", name: "purchase_emails_id" })
  purchaseEmailsId: number;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("int", { name: "supplier_id", nullable: true, default: () => "'0'" })
  supplierId: number | null;

  @Column("tinyint", { name: "status", width: 1, default: () => "'0'" })
  status: boolean;
}
