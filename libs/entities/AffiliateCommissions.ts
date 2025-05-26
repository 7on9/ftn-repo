import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("affiliate_id", ["affiliateId", "orderId"], {})
@Entity("affiliate_commissions", { schema: "ftn_db_main" })
export class AffiliateCommissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "affiliate_id", unsigned: true, default: () => "'0'" })
  affiliateId: number;

  @Column("int", { name: "order_id", unsigned: true, default: () => "'0'" })
  orderId: number;

  @Column("float", {
    name: "commission_rate",
    unsigned: true,
    precision: 4,
    scale: 2,
    default: () => "'0.00'",
  })
  commissionRate: number;

  @Column("float", {
    name: "total_price",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  totalPrice: number;

  @Column("float", {
    name: "commission",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  commission: number;

  @Column("varchar", { name: "currency", nullable: true, length: 3 })
  currency: string | null;
}
