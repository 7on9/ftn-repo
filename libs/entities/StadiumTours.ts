import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stadium_tours", { schema: "ftn_db_main" })
export class StadiumTours {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "stadium_tour_id",
    unsigned: true,
  })
  stadiumTourId: number;

  @Column("int", {
    name: "venue_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  venueId: number | null;

  @Column("varchar", { name: "venue_name", nullable: true, length: 254 })
  venueName: string | null;

  @Column("varchar", { name: "venue_name_es", nullable: true, length: 254 })
  venueNameEs: string | null;

  @Column("varchar", { name: "venue_name_dk", nullable: true, length: 254 })
  venueNameDk: string | null;

  @Column("varchar", { name: "venue_name_se", nullable: true, length: 254 })
  venueNameSe: string | null;

  @Column("varchar", { name: "venue_name_fi", nullable: true, length: 254 })
  venueNameFi: string | null;

  @Column("varchar", { name: "venue_name_nl", nullable: true, length: 254 })
  venueNameNl: string | null;

  @Column("varchar", { name: "venue_name_it", nullable: true, length: 254 })
  venueNameIt: string | null;

  @Column("varchar", { name: "venue_name_de", nullable: true, length: 254 })
  venueNameDe: string | null;

  @Column("varchar", { name: "venue_name_fr", nullable: true, length: 254 })
  venueNameFr: string | null;

  @Column("int", {
    name: "country_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  countryId: number | null;

  @Column("int", {
    name: "city_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  cityId: number | null;

  @Column("varchar", { name: "stadium_currency", nullable: true, length: 4 })
  stadiumCurrency: string | null;

  @Column("float", {
    name: "child_ticket_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  childTicketPrice: number | null;

  @Column("float", {
    name: "adult_ticket_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  adultTicketPrice: number | null;

  @Column("float", {
    name: "handling_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  handlingPrice: number | null;

  @Column("tinyint", {
    name: "show_in_menu",
    unsigned: true,
    default: () => "'0'",
  })
  showInMenu: number;

  @Column("varchar", { name: "teams_attached", nullable: true, length: 254 })
  teamsAttached: string | null;

  @Column("varchar", {
    name: "stadium_tour_image",
    nullable: true,
    length: 254,
  })
  stadiumTourImage: string | null;
}
