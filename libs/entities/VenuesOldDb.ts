import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("venue_city_id", ["venueCityId", "venueCountryId"], {})
@Entity("venues_old_db", { schema: "ftn_db_main" })
export class VenuesOldDb {
  @PrimaryGeneratedColumn({
    type: "smallint",
    name: "venue_id",
    unsigned: true,
  })
  venueId: number;

  @Column("varchar", { name: "venue_name", nullable: true, length: 255 })
  venueName: string | null;

  @Column("varchar", { name: "venue_second_name", nullable: true, length: 255 })
  venueSecondName: string | null;

  @Column("smallint", { name: "venue_city_id", nullable: true, unsigned: true })
  venueCityId: number | null;

  @Column("tinyint", {
    name: "venue_country_id",
    nullable: true,
    unsigned: true,
  })
  venueCountryId: number | null;

  @Column("varchar", { name: "venue_image", nullable: true, length: 255 })
  venueImage: string | null;

  @Column("varchar", { name: "venue_cover", nullable: true, length: 255 })
  venueCover: string | null;

  @Column("text", { name: "directions", nullable: true })
  directions: string | null;

  @Column("tinyint", { name: "stadium_tour", nullable: true, unsigned: true })
  stadiumTour: number | null;

  @Column("varchar", { name: "venue_currency", nullable: true, length: 10 })
  venueCurrency: string | null;

  @Column("float", {
    name: "venue_handling_fee",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  venueHandlingFee: number | null;

  @Column("float", {
    name: "venue_child_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  venueChildPrice: number | null;

  @Column("float", {
    name: "venue_adult_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  venueAdultPrice: number | null;

  @Column("varchar", { name: "seating_plan", nullable: true, length: 255 })
  seatingPlan: string | null;

  @Column("int", { name: "capacity", nullable: true, unsigned: true })
  capacity: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;
}
