import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("type", ["type"], {})
@Index("idx_account_status_type", ["accountStatus", "type"], {})
@Entity("suppliers", { schema: "ftn_db_main" })
export class Suppliers {
  @PrimaryGeneratedColumn({ type: "int", name: "supplier_id", unsigned: true })
  supplierId: number;

  @Column("varchar", { name: "supplier_name", nullable: true, length: 255 })
  supplierName: string | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 25 })
  firstName: string | null;

  @Column("varchar", { name: "supplier_secret", nullable: true, length: 64 })
  supplierSecret: string | null;

  @Column("text", { name: "allowed_actions", nullable: true })
  allowedActions: string | null;

  @Column("text", { name: "safe_ips", nullable: true })
  safeIps: string | null;

  @Column("int", {
    name: "dob",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dob: number | null;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Column("varchar", { name: "supplier_company", nullable: true, length: 254 })
  supplierCompany: string | null;

  @Column("varchar", { name: "supplier_website", nullable: true, length: 254 })
  supplierWebsite: string | null;

  @Column("varchar", { name: "supplier_password", nullable: true, length: 32 })
  supplierPassword: string | null;

  @Column("varchar", { name: "supplier_email", nullable: true, length: 255 })
  supplierEmail: string | null;

  @Column("varchar", { name: "supplier_email2", nullable: true, length: 254 })
  supplierEmail2: string | null;

  @Column("varchar", { name: "supplier_email3", nullable: true, length: 254 })
  supplierEmail3: string | null;

  @Column("varchar", { name: "supplier_email4", nullable: true, length: 254 })
  supplierEmail4: string | null;

  @Column("varchar", { name: "supplier_email5", nullable: true, length: 254 })
  supplierEmail5: string | null;

  @Column("varchar", { name: "supplier_email6", nullable: true, length: 254 })
  supplierEmail6: string | null;

  @Column("varchar", { name: "supplier_email7", nullable: true, length: 254 })
  supplierEmail7: string | null;

  @Column("varchar", { name: "supplier_email8", nullable: true, length: 254 })
  supplierEmail8: string | null;

  @Column("varchar", { name: "supplier_email9", nullable: true, length: 254 })
  supplierEmail9: string | null;

  @Column("varchar", { name: "supplier_email10", nullable: true, length: 254 })
  supplierEmail10: string | null;

  @Column("varchar", { name: "supplier_paypal1", nullable: true, length: 128 })
  supplierPaypal1: string | null;

  @Column("varchar", { name: "supplier_paypal2", nullable: true, length: 128 })
  supplierPaypal2: string | null;

  @Column("varchar", { name: "supplier_phone", nullable: true, length: 254 })
  supplierPhone: string | null;

  @Column("varchar", { name: "supplier_phone2", nullable: true, length: 254 })
  supplierPhone2: string | null;

  @Column("varchar", { name: "supplier_phone3", nullable: true, length: 254 })
  supplierPhone3: string | null;

  @Column("varchar", { name: "supplier_phone4", nullable: true, length: 254 })
  supplierPhone4: string | null;

  @Column("varchar", { name: "supplier_address", nullable: true, length: 256 })
  supplierAddress: string | null;

  @Column("varchar", { name: "supplier_country", nullable: true, length: 64 })
  supplierCountry: string | null;

  @Column("tinyint", { name: "hide_history", nullable: true, width: 1 })
  hideHistory: boolean | null;

  @Column("int", {
    name: "accounting_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  accountingId: number | null;

  @Column("tinyint", {
    name: "show_comp_details",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  showCompDetails: number | null;

  @Column("tinyint", {
    name: "show_malta",
    nullable: true,
    default: () => "'0'",
  })
  showMalta: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 16 })
  type: string | null;

  @Column("text", { name: "name_history", nullable: true })
  nameHistory: string | null;

  @Column("tinyint", { name: "general", nullable: true, width: 1 })
  general: boolean | null;

  @Column("varchar", {
    name: "history_show_years",
    nullable: true,
    length: 255,
  })
  historyShowYears: string | null;

  @Column("int", { name: "max_listing", nullable: true })
  maxListing: number | null;

  @Column("int", { name: "max_per_category", nullable: true })
  maxPerCategory: number | null;

  @Column("int", { name: "max_event_money", nullable: true })
  maxEventMoney: number | null;

  @Column("int", {
    name: "account_status",
    nullable: true,
    comment: "1: Allow Listing, 2: Not Allow Listing, 3: Account Closed",
    default: () => "'1'",
  })
  accountStatus: number | null;

  @Column("tinyint", {
    name: "show_contact_number",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  showContactNumber: boolean | null;

  @Column("tinyint", {
    name: "request_payment_future",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  requestPaymentFuture: boolean | null;

  @Column("varchar", { name: "webhook_url", nullable: true, length: 255 })
  webhookUrl: string | null;

  @Column("varchar", { name: "webhook_token", nullable: true, length: 255 })
  webhookToken: string | null;

  @Column("int", { name: "last_login", nullable: true })
  lastLogin: number | null;

  @Column("int", {
    name: "limit_hour_kick_off",
    nullable: true,
    default: () => "'1'",
  })
  limitHourKickOff: number | null;

  @Column("tinyint", { name: "is_payout_profile", nullable: true, width: 1 })
  isPayoutProfile: boolean | null;

  @Column("tinyint", {
    name: "allow_api_call",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  allowApiCall: boolean | null;
}
