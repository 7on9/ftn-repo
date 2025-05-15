import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("supplier_sub_account", { schema: "ftn_db_main" })
export class SupplierSubAccount {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "supplier_sub_id",
    unsigned: true,
  })
  supplierSubId: number;

  @Column("int", { name: "supplier_id", unsigned: true })
  supplierId: number;

  @Column("varchar", { name: "supplier_sub_email", length: 255 })
  supplierSubEmail: string;

  @Column("varchar", { name: "supplier_sub_password", length: 512 })
  supplierSubPassword: string;

  @Column("varchar", { name: "supplier_sub_raw_pass", length: 64 })
  supplierSubRawPass: string;

  @Column("varchar", { name: "supplier_sub_permission", length: 255 })
  supplierSubPermission: string;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  deleted: boolean | null;

  @Column("int", { name: "deleted_date", nullable: true })
  deletedDate: number | null;
}
