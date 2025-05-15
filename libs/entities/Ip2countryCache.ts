import { Column, Entity } from "typeorm";

@Entity("ip2country_cache", { schema: "ftn_db_main" })
export class Ip2countryCache {
  @Column("varchar", { primary: true, name: "ip", length: 45 })
  ip: string;

  @Column("varchar", { name: "country_name", nullable: true, length: 255 })
  countryName: string | null;
}
