import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NomupaySupplierTransferMethods } from "./NomupaySupplierTransferMethods";

@Entity("nomupay_supplier_profiles", { schema: "ftn_db_main" })
export class NomupaySupplierProfiles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "supplier_id" })
  supplierId: number;

  @Column("varchar", {
    name: "status",
    nullable: true,
    length: 45,
    default: () => "'NEW'",
  })
  status: string | null;

  @Column("varchar", { name: "businessName", nullable: true, length: 255 })
  businessName: string | null;

  @Column("varchar", { name: "emailAddress", nullable: true, length: 255 })
  emailAddress: string | null;

  @Column("varchar", {
    name: "phoneNumberCountryCode",
    nullable: true,
    length: 10,
  })
  phoneNumberCountryCode: string | null;

  @Column("varchar", { name: "phoneNumber", nullable: true, length: 20 })
  phoneNumber: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 2 })
  country: string | null;

  @Column("varchar", { name: "stateProvince", nullable: true, length: 255 })
  stateProvince: string | null;

  @Column("varchar", { name: "street", nullable: true, length: 255 })
  street: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("varchar", { name: "postalCode", nullable: true, length: 20 })
  postalCode: string | null;

  @Column("varchar", { name: "firstName", nullable: true, length: 255 })
  firstName: string | null;

  @Column("varchar", { name: "lastName", nullable: true, length: 255 })
  lastName: string | null;

  @Column("date", { name: "dateOfBirth", nullable: true })
  dateOfBirth: string | null;

  @Column("enum", {
    name: "gender",
    nullable: true,
    enum: ["MALE", "FEMALE", "OTHER"],
  })
  gender: "MALE" | "FEMALE" | "OTHER" | null;

  @Column("enum", {
    name: "profileType",
    nullable: true,
    enum: ["INDIVIDUAL", "BUSINESS"],
  })
  profileType: "INDIVIDUAL" | "BUSINESS" | null;

  @Column("varchar", { name: "nomupay_account_id", nullable: true, length: 50 })
  nomupayAccountId: string | null;

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

  @Column("varchar", { name: "reg_no", nullable: true, length: 45 })
  regNo: string | null;

  @Column("varchar", { name: "website_url", nullable: true, length: 200 })
  websiteUrl: string | null;

  @Column("json", { name: "ownership", nullable: true })
  ownership: object | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @OneToMany(
    () => NomupaySupplierTransferMethods,
    (nomupaySupplierTransferMethods) =>
      nomupaySupplierTransferMethods.nomupaySupplierProfiles
  )
  nomupaySupplierTransferMethods: NomupaySupplierTransferMethods[];
}