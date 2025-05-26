import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("secret_name", ["secretName"], { unique: true })
@Index("affiliate_username", ["affiliateUsername"], { unique: true })
@Entity("affiliates", { schema: "ftn_db_main" })
export class Affiliates {
  @PrimaryGeneratedColumn({ type: "int", name: "affiliate_id", unsigned: true })
  affiliateId: number;

  @Column("varchar", { name: "affiliate_name", nullable: true, length: 100 })
  affiliateName: string | null;

  @Column("varchar", {
    name: "affiliate_username",
    nullable: true,
    unique: true,
    length: 50,
  })
  affiliateUsername: string | null;

  @Column("varchar", { name: "password_salt", length: 90 })
  passwordSalt: string;

  @Column("varchar", { name: "password", length: 90 })
  password: string;

  @Column("varchar", { name: "secret_name", unique: true, length: 30 })
  secretName: string;

  @Column("varchar", { name: "affiliate_secret", length: 64 })
  affiliateSecret: string;

  @Column("varchar", { name: "phone_1", nullable: true, length: 30 })
  phone_1: string | null;

  @Column("varchar", { name: "phone_2", nullable: true, length: 30 })
  phone_2: string | null;

  @Column("varchar", { name: "email_address", length: 250 })
  emailAddress: string;

  @Column("varchar", { name: "email_address_2", nullable: true, length: 250 })
  emailAddress_2: string | null;

  @Column("text", { name: "website", nullable: true })
  website: string | null;

  @Column("varchar", { name: "contact_person", nullable: true, length: 255 })
  contactPerson: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 100 })
  company: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 100 })
  country: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 255 })
  comment: string | null;

  @Column("int", { name: "active", default: () => "'1'" })
  active: number;

  @Column("text", { name: "allowed_actions", nullable: true })
  allowedActions: string | null;

  @Column("int", {
    name: "cookie_lifetime",
    unsigned: true,
    default: () => "'1209600'",
  })
  cookieLifetime: number;

  @Column("decimal", {
    name: "precentage",
    unsigned: true,
    precision: 4,
    scale: 2,
    default: () => "'0.00'",
  })
  precentage: string;

  @Column("decimal", {
    name: "min_booking_fee",
    nullable: true,
    unsigned: true,
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  minBookingFee: string | null;

  @Column("text", { name: "safe_ips", nullable: true })
  safeIps: string | null;

  @Column("varchar", { name: "json_additonal_data_cols", length: 250 })
  jsonAdditonalDataCols: string;

  @Column("double", {
    name: "max_commission",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  maxCommission: number | null;

  @Column("enum", {
    name: "max_commission_cur",
    enum: ["USD", "EUR", "GBP"],
    default: () => "'EUR'",
  })
  maxCommissionCur: "USD" | "EUR" | "GBP";

  @Column("text", { name: "pixel_code", nullable: true })
  pixelCode: string | null;

  @Column("varchar", { name: "webhook_url", nullable: true, length: 255 })
  webhookUrl: string | null;

  @Column("varchar", { name: "webhook_token", nullable: true, length: 255 })
  webhookToken: string | null;
}
