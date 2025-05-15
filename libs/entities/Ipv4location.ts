import { Column, Entity, Index } from "typeorm";

@Index("idex_ipv4location_keys", ["ipFrom", "ipTo"], {})
@Index("idex_ipv4location_ip_from", ["ipFrom"], {})
@Index("idex_ipv4location_ip_to", ["ipTo"], {})
@Entity("ipv4location", { schema: "ftn_db_main" })
export class Ipv4location {
  @Column("int", { primary: true, name: "IP_FROM", unsigned: true })
  ipFrom: number;

  @Column("int", { primary: true, name: "IP_TO", unsigned: true })
  ipTo: number;

  @Column("varchar", { name: "country_code", nullable: true, length: 2 })
  countryCode: string | null;

  @Column("varchar", { name: "country_name", nullable: true, length: 64 })
  countryName: string | null;
}
