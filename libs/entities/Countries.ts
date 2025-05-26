import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RestrictionsCountry } from "./RestrictionsCountry";

@Entity("countries", { schema: "ftn_db_main" })
export class Countries {
  @PrimaryGeneratedColumn({
    type: "tinyint",
    name: "country_id",
    unsigned: true,
  })
  countryId: number;

  @Column("varchar", { name: "country_name", nullable: true, length: 64 })
  countryName: string | null;

  @Column("varchar", { name: "country_name_es", nullable: true, length: 64 })
  countryNameEs: string | null;

  @Column("varchar", { name: "country_name_dk", nullable: true, length: 64 })
  countryNameDk: string | null;

  @Column("varchar", { name: "country_name_se", nullable: true, length: 64 })
  countryNameSe: string | null;

  @Column("varchar", { name: "country_name_fi", nullable: true, length: 64 })
  countryNameFi: string | null;

  @Column("varchar", { name: "country_name_nl", nullable: true, length: 64 })
  countryNameNl: string | null;

  @Column("varchar", { name: "country_name_it", nullable: true, length: 64 })
  countryNameIt: string | null;

  @Column("varchar", { name: "country_name_de", nullable: true, length: 64 })
  countryNameDe: string | null;

  @Column("varchar", { name: "country_name_fr", nullable: true, length: 64 })
  countryNameFr: string | null;

  @Column("varchar", { name: "country_image", nullable: true, length: 255 })
  countryImage: string | null;

  @Column("varchar", { name: "continent", nullable: true, length: 32 })
  continent: string | null;

  @Column("varchar", { name: "continent_es", nullable: true, length: 32 })
  continentEs: string | null;

  @Column("varchar", { name: "continent_dk", nullable: true, length: 32 })
  continentDk: string | null;

  @Column("varchar", { name: "continent_se", nullable: true, length: 32 })
  continentSe: string | null;

  @Column("varchar", { name: "continent_fi", nullable: true, length: 32 })
  continentFi: string | null;

  @Column("varchar", { name: "continent_nl", nullable: true, length: 32 })
  continentNl: string | null;

  @Column("varchar", { name: "continent_it", nullable: true, length: 32 })
  continentIt: string | null;

  @Column("varchar", { name: "continent_de", nullable: true, length: 32 })
  continentDe: string | null;

  @Column("varchar", { name: "continent_fr", nullable: true, length: 32 })
  continentFr: string | null;

  @Column("varchar", { name: "flag", nullable: true, length: 254 })
  flag: string | null;

  @Column("varchar", { name: "country_code", nullable: true, length: 25 })
  countryCode: string | null;

  @Column("float", {
    name: "gmt",
    precision: 2,
    scale: 1,
    default: () => "'0.0'",
  })
  gmt: number;

  @OneToMany(
    () => RestrictionsCountry,
    (restrictionsCountry) => restrictionsCountry.restrictCountry
  )
  restrictionsCountries: RestrictionsCountry[];
}
