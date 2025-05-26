import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cities", { schema: "ftn_db_main" })
export class Cities {
  @PrimaryGeneratedColumn({ type: "smallint", name: "city_id", unsigned: true })
  cityId: number;

  @Column("varchar", { name: "city_name", nullable: true, length: 255 })
  cityName: string | null;

  @Column("varchar", { name: "city_name_es", nullable: true, length: 255 })
  cityNameEs: string | null;

  @Column("varchar", { name: "city_name_dk", nullable: true, length: 255 })
  cityNameDk: string | null;

  @Column("varchar", { name: "city_name_se", nullable: true, length: 255 })
  cityNameSe: string | null;

  @Column("varchar", { name: "city_name_fi", nullable: true, length: 255 })
  cityNameFi: string | null;

  @Column("varchar", { name: "city_name_nl", nullable: true, length: 255 })
  cityNameNl: string | null;

  @Column("varchar", { name: "city_name_it", nullable: true, length: 255 })
  cityNameIt: string | null;

  @Column("varchar", { name: "city_name_de", nullable: true, length: 255 })
  cityNameDe: string | null;

  @Column("varchar", { name: "city_name_fr", nullable: true, length: 255 })
  cityNameFr: string | null;

  @Column("tinyint", {
    name: "city_country_id",
    unsigned: true,
    default: () => "'0'",
  })
  cityCountryId: number;

  @Column("int", {
    name: "city_state_id",
    unsigned: true,
    default: () => "'0'",
  })
  cityStateId: number;

  @Column("varchar", { name: "city_image", nullable: true, length: 255 })
  cityImage: string | null;
}
