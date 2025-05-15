import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("venues", { schema: "ftn_db_main" })
export class Venues {
  @PrimaryGeneratedColumn({
    type: "smallint",
    name: "venue_id",
    unsigned: true,
  })
  venueId: number;

  @Column("varchar", { name: "venue_name", nullable: true, length: 255 })
  venueName: string | null;

  @Column("varchar", { name: "venue_system_name", nullable: true, length: 255 })
  venueSystemName: string | null;

  @Column("varchar", { name: "venue_name_es", nullable: true, length: 255 })
  venueNameEs: string | null;

  @Column("varchar", { name: "venue_name_dk", nullable: true, length: 255 })
  venueNameDk: string | null;

  @Column("varchar", { name: "venue_name_se", nullable: true, length: 255 })
  venueNameSe: string | null;

  @Column("varchar", { name: "venue_name_fi", nullable: true, length: 255 })
  venueNameFi: string | null;

  @Column("varchar", { name: "venue_name_nl", nullable: true, length: 255 })
  venueNameNl: string | null;

  @Column("varchar", { name: "venue_name_it", nullable: true, length: 255 })
  venueNameIt: string | null;

  @Column("varchar", { name: "venue_name_de", nullable: true, length: 255 })
  venueNameDe: string | null;

  @Column("varchar", { name: "venue_name_fr", nullable: true, length: 255 })
  venueNameFr: string | null;

  @Column("varchar", { name: "venue_second_name", nullable: true, length: 255 })
  venueSecondName: string | null;

  @Column("varchar", {
    name: "venue_second_name_es",
    nullable: true,
    length: 255,
  })
  venueSecondNameEs: string | null;

  @Column("varchar", {
    name: "venue_second_name_dk",
    nullable: true,
    length: 255,
  })
  venueSecondNameDk: string | null;

  @Column("varchar", {
    name: "venue_second_name_se",
    nullable: true,
    length: 255,
  })
  venueSecondNameSe: string | null;

  @Column("varchar", {
    name: "venue_second_name_fi",
    nullable: true,
    length: 255,
  })
  venueSecondNameFi: string | null;

  @Column("varchar", {
    name: "venue_second_name_nl",
    nullable: true,
    length: 255,
  })
  venueSecondNameNl: string | null;

  @Column("varchar", {
    name: "venue_second_name_it",
    nullable: true,
    length: 255,
  })
  venueSecondNameIt: string | null;

  @Column("varchar", {
    name: "venue_second_name_de",
    nullable: true,
    length: 255,
  })
  venueSecondNameDe: string | null;

  @Column("varchar", {
    name: "venue_second_name_fr",
    nullable: true,
    length: 255,
  })
  venueSecondNameFr: string | null;

  @Column("smallint", {
    name: "venue_city_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  venueCityId: number | null;

  @Column("tinyint", {
    name: "venue_country_id",
    unsigned: true,
    default: () => "'0'",
  })
  venueCountryId: number;

  @Column("varchar", { name: "venue_image", nullable: true, length: 255 })
  venueImage: string | null;

  @Column("varchar", { name: "venue_cover", nullable: true, length: 255 })
  venueCover: string | null;

  @Column("text", { name: "directions", nullable: true })
  directions: string | null;

  @Column("text", { name: "directions_es", nullable: true })
  directionsEs: string | null;

  @Column("text", { name: "directions_dk", nullable: true })
  directionsDk: string | null;

  @Column("text", { name: "directions_se", nullable: true })
  directionsSe: string | null;

  @Column("text", { name: "directions_fi", nullable: true })
  directionsFi: string | null;

  @Column("text", { name: "directions_nl", nullable: true })
  directionsNl: string | null;

  @Column("text", { name: "directions_it", nullable: true })
  directionsIt: string | null;

  @Column("text", { name: "directions_de", nullable: true })
  directionsDe: string | null;

  @Column("text", { name: "directions_fr", nullable: true })
  directionsFr: string | null;

  @Column("tinyint", {
    name: "stadium_tour",
    unsigned: true,
    default: () => "'0'",
  })
  stadiumTour: number;

  @Column("varchar", { name: "venue_currency", nullable: true, length: 10 })
  venueCurrency: string | null;

  @Column("float", {
    name: "venue_handling_fee",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  venueHandlingFee: number | null;

  @Column("float", {
    name: "venue_child_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  venueChildPrice: number | null;

  @Column("float", {
    name: "venue_adult_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  venueAdultPrice: number | null;

  @Column("varchar", { name: "seating_plan", nullable: true, length: 255 })
  seatingPlan: string | null;

  @Column("int", {
    name: "capacity",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  capacity: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;
}
