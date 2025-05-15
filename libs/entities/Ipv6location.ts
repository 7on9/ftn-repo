import { Column, Entity } from "typeorm";

@Entity("ipv6location", { schema: "ftn_db_main" })
export class Ipv6location {
  @Column("varchar", { primary: true, name: "IP_FROM", length: 40 })
  ipFrom: string;

  @Column("varchar", { primary: true, name: "IP_TO", length: 40 })
  ipTo: string;

  @Column("varchar", { name: "country_code", nullable: true, length: 2 })
  countryCode: string | null;

  @Column("varchar", { name: "country_name", nullable: true, length: 64 })
  countryName: string | null;
}
