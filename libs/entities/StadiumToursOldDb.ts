import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stadium_tours_old_db", { schema: "ftn_db_main" })
export class StadiumToursOldDb {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "stadium_tour_id",
    unsigned: true,
  })
  stadiumTourId: number;

  @Column("int", { name: "venue_id", nullable: true, unsigned: true })
  venueId: number | null;

  @Column("varchar", { name: "venue_name", nullable: true, length: 254 })
  venueName: string | null;

  @Column("int", { name: "country_id", nullable: true, unsigned: true })
  countryId: number | null;

  @Column("int", { name: "city_id", nullable: true, unsigned: true })
  cityId: number | null;

  @Column("varchar", { name: "stadium_currency", nullable: true, length: 4 })
  stadiumCurrency: string | null;

  @Column("float", {
    name: "child_ticket_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  childTicketPrice: number | null;

  @Column("float", {
    name: "adult_ticket_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  adultTicketPrice: number | null;

  @Column("float", {
    name: "handling_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  handlingPrice: number | null;

  @Column("tinyint", { name: "show_in_menu", nullable: true, unsigned: true })
  showInMenu: number | null;

  @Column("varchar", { name: "teams_attached", nullable: true, length: 254 })
  teamsAttached: string | null;

  @Column("varchar", {
    name: "stadium_tour_image",
    nullable: true,
    length: 254,
  })
  stadiumTourImage: string | null;
}
