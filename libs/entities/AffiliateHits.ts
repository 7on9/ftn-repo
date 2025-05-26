import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("aff_id", ["affiliateId", "site", "ip", "timestamp"], {})
@Entity("affiliate_hits", { schema: "ftn_db_main" })
export class AffiliateHits {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "affiliate_id", unsigned: true, default: () => "'0'" })
  affiliateId: number;

  @Column("varchar", { name: "site", nullable: true, length: 64 })
  site: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "referrer", nullable: true, length: 512 })
  referrer: string | null;

  @Column("int", { name: "timestamp", unsigned: true, default: () => "'0'" })
  timestamp: number;
}
