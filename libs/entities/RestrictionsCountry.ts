import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Countries } from "./Countries";

@Index("id", ["id"], {})
@Index("FK_country_restrictions_countries", ["restrictCountryId"], {})
@Entity("restrictions_country", { schema: "ftn_db_main" })
export class RestrictionsCountry {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("tinyint", {
    name: "restrict_country_id",
    nullable: true,
    unsigned: true,
  })
  restrictCountryId: number | null;

  @Column("varchar", { name: "domain", nullable: true, length: 50 })
  domain: string | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "restrict_type", nullable: true, length: 50 })
  restrictType: string | null;

  @Column("longtext", { name: "restrict_values", nullable: true })
  restrictValues: string | null;

  @ManyToOne(() => Countries, (countries) => countries.restrictionsCountries, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "restrict_country_id", referencedColumnName: "countryId" },
  ])
  restrictCountry: Countries;
}
