import { Column, Entity } from "typeorm";

@Entity("iplocationold", { schema: "ftn_db_main" })
export class Iplocationold {
  @Column("int", { primary: true, name: "IP_FROM", unsigned: true })
  ipFrom: number;

  @Column("int", { primary: true, name: "IP_TO", unsigned: true })
  ipTo: number;

  @Column("varchar", { name: "country_code", nullable: true, length: 2 })
  countryCode: string | null;

  @Column("varchar", { name: "country_name", nullable: true, length: 50 })
  countryName: string | null;
}
