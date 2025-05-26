import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], { unique: true })
@Index("affiliate_id", ["affiliateId"], {})
@Index("affiliate_entrypoint_id", ["affiliateEntrypointId"], {})
@Entity("affiliate_conversions", { schema: "ftn_db_main" })
export class AffiliateConversions {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "affiliate_conversion_id",
    unsigned: true,
  })
  affiliateConversionId: number;

  @Column("int", { name: "affiliate_id", unsigned: true })
  affiliateId: number;

  @Column("int", { name: "affiliate_entrypoint_id", nullable: true })
  affiliateEntrypointId: number | null;

  @Column("int", { name: "order_id", unique: true, unsigned: true })
  orderId: number;

  @Column("decimal", {
    name: "precentage",
    precision: 4,
    scale: 2,
    default: () => "'0.00'",
  })
  precentage: string;

  @Column("enum", {
    name: "currency_code",
    nullable: true,
    enum: ["USD", "EUR", "GBP", "AUD"],
  })
  currencyCode: "USD" | "EUR" | "GBP" | "AUD" | null;

  @Column("decimal", {
    name: "client_payed",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  clientPayed: string | null;

  @Column("decimal", {
    name: "commission",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  commission: string | null;

  @Column("enum", {
    name: "payment_approval_status",
    enum: ["Examined", "Suspicions", "Approved", "Denied"],
    default: () => "'Approved'",
  })
  paymentApprovalStatus: "Examined" | "Suspicions" | "Approved" | "Denied";

  @Column("int", { name: "insert_time", unsigned: true })
  insertTime: number;

  @Column("int", { name: "is_capped", default: () => "'0'" })
  isCapped: number;
}
