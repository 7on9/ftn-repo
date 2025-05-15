import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("affiliate_id", ["affiliateId"], {})
@Index("affiliate_click_insert_time", ["insertTime"], {})
@Index("affiliate_click_daily_report", ["affiliateId", "insertTime"], {})
@Entity("affiliate_clicks", { schema: "ftn_db_main" })
export class AffiliateClicks {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "affiliate_click_id",
    unsigned: true,
  })
  affiliateClickId: number;

  @Column("int", { name: "affiliate_id", unsigned: true })
  affiliateId: number;

  @Column("int", { name: "insert_time" })
  insertTime: number;

  @Column("varchar", { name: "url", nullable: true, length: 1024 })
  url: string | null;

  @Column("int", {
    name: "affiliate_entrypoint_id",
    nullable: true,
    unsigned: true,
  })
  affiliateEntrypointId: number | null;

  @Column("int", { name: "is_new_cookie", default: () => "'0'" })
  isNewCookie: number;

  @Column("varchar", { name: "country_code", nullable: true, length: 3 })
  countryCode: string | null;

  @Column("text", { name: "click_json_data", nullable: true })
  clickJsonData: string | null;
}
