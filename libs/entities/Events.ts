import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_team1", ["eventTeam1"], {})
@Index("event_team2", ["eventTeam2"], {})
@Index("event_date", ["eventDate"], {})
@Index("event_country_id", ["eventCountryId"], {})
@Index("event_venue_id", ["eventVenueId"], {})
@Index("event_city_id", ["eventCityId"], {})
@Index("event_tournament_id", ["eventTournamentId"], {})
@Index("event_active", ["eventActive"], {})
@Index("event_secondary_tournament_id", ["eventSecondaryTournamentId"], {})
@Index("postponed", ["postponed"], {})
@Index("idx_event_type", ["type"], {})
@Index(
  "idx_events_id_type_date_postponed",
  ["eventId", "type", "eventDate", "postponed"],
  {}
)
@Index("idx_events_postponed_event_date", ["postponed", "eventDate"], {})
@Index(
  "idx_events_active_leave_team1",
  ["eventActive", "leaveOn", "eventTeam1"],
  {}
)
@Entity("events", { schema: "ftn_db_main" })
export class Events {
  @PrimaryGeneratedColumn({ type: "int", name: "event_id", unsigned: true })
  eventId: number;

  @Column("varchar", { name: "event_name", nullable: true, length: 255 })
  eventName: string | null;

  @Column("smallint", {
    name: "event_team1",
    unsigned: true,
    default: () => "'0'",
  })
  eventTeam1: number;

  @Column("smallint", {
    name: "event_team2",
    unsigned: true,
    default: () => "'0'",
  })
  eventTeam2: number;

  @Column("text", { name: "event_description", nullable: true })
  eventDescription: string | null;

  @Column("text", { name: "event_special_note", nullable: true })
  eventSpecialNote: string | null;

  @Column("int", { name: "event_date", default: () => "'0'" })
  eventDate: number;

  @Column("tinyint", {
    name: "event_time_tba",
    unsigned: true,
    default: () => "'0'",
  })
  eventTimeTba: number;

  @Column("tinyint", {
    name: "event_country_id",
    unsigned: true,
    default: () => "'0'",
  })
  eventCountryId: number;

  @Column("smallint", {
    name: "event_city_id",
    unsigned: true,
    default: () => "'0'",
  })
  eventCityId: number;

  @Column("smallint", {
    name: "event_venue_id",
    unsigned: true,
    default: () => "'0'",
  })
  eventVenueId: number;

  @Column("smallint", {
    name: "event_tournament_id",
    unsigned: true,
    default: () => "'0'",
  })
  eventTournamentId: number;

  @Column("int", {
    name: "event_secondary_tournament_id",
    unsigned: true,
    default: () => "'0'",
  })
  eventSecondaryTournamentId: number;

  @Column("tinyint", {
    name: "event_active",
    unsigned: true,
    default: () => "'0'",
  })
  eventActive: number;

  @Column("smallint", {
    name: "event_viewed",
    unsigned: true,
    default: () => "'0'",
  })
  eventViewed: number;

  @Column("int", { name: "event_created", default: () => "'0'" })
  eventCreated: number;

  @Column("int", { name: "event_updated", default: () => "'0'" })
  eventUpdated: number;

  @Column("varchar", { name: "event_image", nullable: true, length: 255 })
  eventImage: string | null;

  @Column("tinyint", {
    name: "event_currency_id",
    unsigned: true,
    default: () => "'0'",
  })
  eventCurrencyId: number;

  @Column("float", {
    name: "event_handling_fee",
    unsigned: true,
    precision: 4,
    scale: 2,
    default: () => "'0.00'",
  })
  eventHandlingFee: number;

  @Column("double", {
    name: "event_commission",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  eventCommission: number | null;

  @Column("tinyint", {
    name: "most_popular",
    unsigned: true,
    default: () => "'0'",
  })
  mostPopular: number;

  @Column("tinyint", { name: "facebook", default: () => "'0'" })
  facebook: number;

  @Column("tinyint", {
    name: "date_change",
    unsigned: true,
    default: () => "'0'",
  })
  dateChange: number;

  @Column("tinyint", {
    name: "postponed",
    unsigned: true,
    default: () => "'0'",
  })
  postponed: number;

  @Column("tinyint", { name: "leave_on", width: 1, default: () => "'0'" })
  leaveOn: boolean;

  @Column("text", { name: "free_comment", nullable: true })
  freeComment: string | null;

  @Column("varchar", {
    name: "specific_delivery_method",
    nullable: true,
    length: 32,
  })
  specificDeliveryMethod: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;

  @Column("tinyint", {
    name: "get_shipping_address",
    unsigned: true,
    default: () => "'0'",
  })
  getShippingAddress: number;

  @Column("tinyint", { name: "force_home", default: () => "'0'" })
  forceHome: number;

  @Column("tinyint", {
    name: "closed_doors",
    unsigned: true,
    default: () => "'0'",
  })
  closedDoors: number;

  @Column("tinyint", {
    name: "done_handling",
    unsigned: true,
    default: () => "'0'",
  })
  doneHandling: number;

  @Column("tinyint", {
    name: "is_stadium_tour",
    unsigned: true,
    default: () => "'0'",
  })
  isStadiumTour: number;

  @Column("varchar", { name: "home_text", nullable: true, length: 255 })
  homeText: string | null;

  @Column("varchar", { name: "away_text", nullable: true, length: 255 })
  awayText: string | null;

  @Column("tinyint", {
    name: "show_filter_fan_side",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  showFilterFanSide: boolean | null;

  @Column("varchar", { name: "event_venue", nullable: true, length: 255 })
  eventVenue: string | null;
}
