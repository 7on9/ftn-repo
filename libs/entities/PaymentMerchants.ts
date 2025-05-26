import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("merchant_name", ["merchantName"], {})
@Entity("payment_merchants", { schema: "ftn_db_main" })
export class PaymentMerchants {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "merchant_id" })
  merchantId: number;

  @Column("varchar", { name: "merchant_name", nullable: true, length: 255 })
  merchantName: string | null;

  @Column("int", {
    name: "merchant_quantity",
    nullable: true,
    default: () => "'0'",
  })
  merchantQuantity: number | null;

  @Column("int", {
    name: "merchant_current_counting",
    nullable: true,
    default: () => "'0'",
  })
  merchantCurrentCounting: number | null;

  @Column("tinyint", { name: "GBP", default: () => "'0'" })
  gbp: number;

  @Column("tinyint", { name: "EUR", default: () => "'0'" })
  eur: number;

  @Column("tinyint", { name: "USD", default: () => "'0'" })
  usd: number;

  @Column("tinyint", { name: "AUD", nullable: true, default: () => "'0'" })
  aud: number | null;

  @Column("tinyint", {
    name: "payment_link_enabled",
    width: 1,
    default: () => "'0'",
  })
  paymentLinkEnabled: boolean;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'0'" })
  isActive: boolean;

  @Column("tinyint", {
    name: "allow_non_3d",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  allowNon_3d: boolean | null;

  @Column("smallint", {
    name: "days_before_non_3d",
    nullable: true,
    default: () => "'0'",
  })
  daysBeforeNon_3d: number | null;

  @Column("text", { name: "countries_allow_non_3d", nullable: true })
  countriesAllowNon_3d: string | null;
}
