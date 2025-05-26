import { Column, Entity } from "typeorm";

@Entity("iplocation", { schema: "ftn_db_main" })
export class Iplocation {
  @Column("int", { primary: true, name: "IP_FROM", unsigned: true })
  ipFrom: number;

  @Column("int", { primary: true, name: "IP_TO", unsigned: true })
  ipTo: number;

  @Column("varchar", { name: "country_code", nullable: true, length: 2 })
  countryCode: string | null;

  @Column("varchar", { name: "country_name", nullable: true, length: 64 })
  countryName: string | null;
}
