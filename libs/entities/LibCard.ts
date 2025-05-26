import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lib_card", { schema: "ftn_db_main" })
export class LibCard {
  @PrimaryGeneratedColumn({ type: "int", name: "card_id", unsigned: true })
  cardId: number;

  @Column("int", { name: "card_num_old", default: () => "'0'" })
  cardNumOld: number;

  @Column("varchar", { name: "whole_card", nullable: true, length: 16 })
  wholeCard: string | null;

  @Column("int", { name: "cvv", default: () => "'0'" })
  cvv: number;

  @Column("int", { name: "expiry_date", unsigned: true, default: () => "'0'" })
  expiryDate: number;

  @Column("varchar", { name: "name_on_card", nullable: true, length: 50 })
  nameOnCard: string | null;

  @Column("varchar", { name: "business_name", nullable: true, length: 64 })
  businessName: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 256 })
  address: string | null;

  @Column("int", { name: "dob", unsigned: true, default: () => "'0'" })
  dob: number;

  @Column("varchar", { name: "account_number", nullable: true, length: 64 })
  accountNumber: string | null;

  @Column("varchar", { name: "sort_code", nullable: true, length: 32 })
  sortCode: string | null;

  @Column("varchar", { name: "maiden_name", nullable: true, length: 32 })
  maidenName: string | null;

  @Column("varchar", { name: "online_code", nullable: true, length: 32 })
  onlineCode: string | null;

  @Column("varchar", { name: "telephone_password", nullable: true, length: 32 })
  telephonePassword: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 25 })
  type: string | null;

  @Column("tinyint", { name: "active", width: 1, default: () => "'0'" })
  active: boolean;

  @Column("varchar", { name: "source", nullable: true, length: 16 })
  source: string | null;

  @Column("varchar", { name: "card_num", nullable: true, length: 8 })
  cardNum: string | null;

  @Column("varchar", { name: "card_company", nullable: true, length: 20 })
  cardCompany: string | null;

  @Column("varchar", { name: "issuer", nullable: true, length: 32 })
  issuer: string | null;
}
