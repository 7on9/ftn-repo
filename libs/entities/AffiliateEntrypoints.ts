import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("affiliate_id", ["affiliateId"], {})
@Index("country_code", ["countryCode"], {})
@Entity("affiliate_entrypoints", { schema: "ftn_db_main" })
export class AffiliateEntrypoints {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "affiliate_entrypoint_id",
    unsigned: true,
  })
  affiliateEntrypointId: number;

  @Column("int", { name: "affiliate_id", unsigned: true })
  affiliateId: number;

  @Column("varchar", { name: "entrypoint", nullable: true, length: 1024 })
  entrypoint: string | null;

  @Column("varchar", { name: "useragent", nullable: true, length: 300 })
  useragent: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 39 })
  ip: string | null;

  @Column("varchar", { name: "country_code", nullable: true, length: 5 })
  countryCode: string | null;

  @Column("int", { name: "timestamp", nullable: true })
  timestamp: number | null;

  @Column("text", { name: "entrypoint_json_data", nullable: true })
  entrypointJsonData: string | null;
}
