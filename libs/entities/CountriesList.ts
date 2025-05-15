import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("countries_list", { schema: "ftn_db_main" })
export class CountriesList {
  @PrimaryGeneratedColumn({ type: "int", name: "country_id", unsigned: true })
  countryId: number;

  @Column("varchar", { name: "country_name", nullable: true, length: 255 })
  countryName: string | null;

  @Column("varchar", { name: "country_name_es", nullable: true, length: 255 })
  countryNameEs: string | null;

  @Column("varchar", { name: "country_name_dk", nullable: true, length: 255 })
  countryNameDk: string | null;

  @Column("varchar", { name: "country_name_se", nullable: true, length: 255 })
  countryNameSe: string | null;

  @Column("varchar", { name: "country_name_fi", nullable: true, length: 255 })
  countryNameFi: string | null;

  @Column("varchar", { name: "country_name_nl", nullable: true, length: 255 })
  countryNameNl: string | null;

  @Column("varchar", { name: "country_name_it", nullable: true, length: 255 })
  countryNameIt: string | null;

  @Column("varchar", { name: "country_name_de", nullable: true, length: 255 })
  countryNameDe: string | null;

  @Column("varchar", { name: "country_name_fr", nullable: true, length: 255 })
  countryNameFr: string | null;

  @Column("varchar", { name: "phone_prefix", nullable: true, length: 25 })
  phonePrefix: string | null;

  @Column("varchar", { name: "country_code", nullable: true, length: 6 })
  countryCode: string | null;

  @Column("varchar", { name: "mobile_codes", nullable: true, length: 32 })
  mobileCodes: string | null;

  @Column("varchar", { name: "continent", nullable: true, length: 255 })
  continent: string | null;
}
