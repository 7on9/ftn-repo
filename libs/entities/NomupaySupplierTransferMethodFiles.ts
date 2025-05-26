import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("nomupay_supplier_transfer_method_files", { schema: "ftn_db_main" })
export class NomupaySupplierTransferMethodFiles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "nomupay_supplier_transfer_method_id" })
  nomupaySupplierTransferMethodId: number;

  @Column("varchar", { name: "file_name", nullable: true, length: 200 })
  fileName: string | null;

  @Column("varchar", { name: "file_size", nullable: true, length: 20 })
  fileSize: string | null;

  @Column("varchar", { name: "document_type", nullable: true, length: 45 })
  documentType: string | null;

  @Column("datetime", {
    name: "uploaded_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  uploadedAt: Date | null;
}
