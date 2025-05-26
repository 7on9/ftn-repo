import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { NomupaySupplierPayments } from "./NomupaySupplierPayments";
import { NomupaySupplierProfiles } from "./NomupaySupplierProfiles";

@Index("nomupay_supplier_profiles_id", ["nomupaySupplierProfilesId"], {})
@Entity("nomupay_supplier_transfer_methods", { schema: "ftn_db_main" })
export class NomupaySupplierTransferMethods {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "nomupay_supplier_profiles_id" })
  nomupaySupplierProfilesId: number;

  @Column("varchar", { name: "countryCode", nullable: true, length: 2 })
  countryCode: string | null;

  @Column("varchar", { name: "currencyCode", nullable: true, length: 3 })
  currencyCode: string | null;

  @Column("varchar", {
    name: "bankId",
    nullable: true,
    comment: "Bank Code Can be numeric bank code or Swift/BIC code",
    length: 50,
  })
  bankId: string | null;

  @Column("varchar", {
    name: "accountId",
    nullable: true,
    comment: "Account Number",
    length: 50,
  })
  accountId: string | null;

  @Column("varchar", {
    name: "nomupay_transfer_method_id",
    nullable: true,
    comment: "Account Number",
    length: 50,
  })
  nomupayTransferMethodId: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 45 })
  status: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  deleted: boolean | null;

  @Column("int", { name: "deleted_at", nullable: true })
  deletedAt: number | null;

  @Column("json", { name: "notes", nullable: true })
  notes: object | null;

  @Column("timestamp", { name: "submitted_at", nullable: true })
  submittedAt: Date | null;

  @Column("tinyint", {
    name: "email_sent",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  emailSent: boolean | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @OneToMany(
    () => NomupaySupplierPayments,
    (nomupaySupplierPayments) =>
      nomupaySupplierPayments.nomupaySupplierTransferMethods
  )
  nomupaySupplierPayments: NomupaySupplierPayments[];

  @ManyToOne(
    () => NomupaySupplierProfiles,
    (nomupaySupplierProfiles) =>
      nomupaySupplierProfiles.nomupaySupplierTransferMethods,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "nomupay_supplier_profiles_id", referencedColumnName: "id" },
  ])
  nomupaySupplierProfiles: NomupaySupplierProfiles;
}
