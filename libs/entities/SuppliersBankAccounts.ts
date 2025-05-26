import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("supplier_id", ["supplierId", "defaultAccount"], {})
@Entity("suppliers_bank_accounts", { schema: "ftn_db_main" })
export class SuppliersBankAccounts {
  @PrimaryGeneratedColumn({ type: "int", name: "bank_id", unsigned: true })
  bankId: number;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("int", { name: "affiliate_id", nullable: true })
  affiliateId: number | null;

  @Column("varchar", { name: "account_type", length: 20 })
  accountType: string;

  @Column("varchar", { name: "account_holder", nullable: true, length: 128 })
  accountHolder: string | null;

  @Column("varchar", {
    name: "account_holder_address",
    nullable: true,
    length: 254,
  })
  accountHolderAddress: string | null;

  @Column("varchar", {
    name: "account_country_of_bank",
    nullable: true,
    length: 100,
  })
  accountCountryOfBank: string | null;

  @Column("varchar", { name: "account_bank_name", nullable: true, length: 100 })
  accountBankName: string | null;

  @Column("varchar", { name: "account_sort_code", nullable: true, length: 50 })
  accountSortCode: string | null;

  @Column("varchar", { name: "account_number", nullable: true, length: 100 })
  accountNumber: string | null;

  @Column("varchar", { name: "swift", nullable: true, length: 64 })
  swift: string | null;

  @Column("varchar", { name: "bic", nullable: true, length: 100 })
  bic: string | null;

  @Column("varchar", { name: "iban", nullable: true, length: 128 })
  iban: string | null;

  @Column("tinyint", {
    name: "default_account",
    unsigned: true,
    default: () => "'0'",
  })
  defaultAccount: number;

  @Column("varchar", { name: "extra_notes", nullable: true, length: 512 })
  extraNotes: string | null;

  @Column("varchar", { name: "reference", nullable: true, length: 255 })
  reference: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  deleted: boolean | null;
}
