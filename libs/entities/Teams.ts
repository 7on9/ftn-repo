import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("teams", { schema: "ftn_db_main" })
export class Teams {
  @PrimaryGeneratedColumn({ type: "smallint", name: "team_id", unsigned: true })
  teamId: number;

  @Column("varchar", { name: "team_name", nullable: true, length: 255 })
  teamName: string | null;

  @Column("varchar", { name: "team_name_es", nullable: true, length: 255 })
  teamNameEs: string | null;

  @Column("varchar", { name: "team_name_dk", nullable: true, length: 255 })
  teamNameDk: string | null;

  @Column("varchar", { name: "team_name_se", nullable: true, length: 255 })
  teamNameSe: string | null;

  @Column("varchar", { name: "team_name_fi", nullable: true, length: 255 })
  teamNameFi: string | null;

  @Column("varchar", { name: "team_name_nl", nullable: true, length: 255 })
  teamNameNl: string | null;

  @Column("varchar", { name: "team_name_it", nullable: true, length: 255 })
  teamNameIt: string | null;

  @Column("varchar", { name: "team_name_de", nullable: true, length: 255 })
  teamNameDe: string | null;

  @Column("varchar", { name: "team_name_fr", nullable: true, length: 255 })
  teamNameFr: string | null;

  @Column("varchar", { name: "team_second_name", nullable: true, length: 255 })
  teamSecondName: string | null;

  @Column("varchar", {
    name: "team_second_name_es",
    nullable: true,
    length: 255,
  })
  teamSecondNameEs: string | null;

  @Column("varchar", {
    name: "team_second_name_dk",
    nullable: true,
    length: 255,
  })
  teamSecondNameDk: string | null;

  @Column("varchar", {
    name: "team_second_name_se",
    nullable: true,
    length: 255,
  })
  teamSecondNameSe: string | null;

  @Column("varchar", {
    name: "team_second_name_fi",
    nullable: true,
    length: 255,
  })
  teamSecondNameFi: string | null;

  @Column("varchar", {
    name: "team_second_name_nl",
    nullable: true,
    length: 255,
  })
  teamSecondNameNl: string | null;

  @Column("varchar", {
    name: "team_second_name_it",
    nullable: true,
    length: 255,
  })
  teamSecondNameIt: string | null;

  @Column("varchar", {
    name: "team_second_name_de",
    nullable: true,
    length: 255,
  })
  teamSecondNameDe: string | null;

  @Column("varchar", {
    name: "team_second_name_fr",
    nullable: true,
    length: 255,
  })
  teamSecondNameFr: string | null;

  @Column("varchar", { name: "team_short_name", nullable: true, length: 16 })
  teamShortName: string | null;

  @Column("varchar", { name: "team_short_name_es", nullable: true, length: 16 })
  teamShortNameEs: string | null;

  @Column("varchar", { name: "team_short_name_dk", nullable: true, length: 16 })
  teamShortNameDk: string | null;

  @Column("varchar", { name: "team_short_name_se", nullable: true, length: 16 })
  teamShortNameSe: string | null;

  @Column("varchar", { name: "team_short_name_fi", nullable: true, length: 16 })
  teamShortNameFi: string | null;

  @Column("varchar", { name: "team_short_name_nl", nullable: true, length: 16 })
  teamShortNameNl: string | null;

  @Column("varchar", { name: "team_short_name_it", nullable: true, length: 16 })
  teamShortNameIt: string | null;

  @Column("varchar", { name: "team_short_name_de", nullable: true, length: 16 })
  teamShortNameDe: string | null;

  @Column("varchar", { name: "team_short_name_fr", nullable: true, length: 16 })
  teamShortNameFr: string | null;

  @Column("int", {
    name: "team_venue_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  teamVenueId: number | null;

  @Column("tinyint", {
    name: "team_country_id",
    unsigned: true,
    default: () => "'0'",
  })
  teamCountryId: number;

  @Column("text", { name: "team_description", nullable: true })
  teamDescription: string | null;

  @Column("text", { name: "team_description_es", nullable: true })
  teamDescriptionEs: string | null;

  @Column("text", { name: "team_description_dk", nullable: true })
  teamDescriptionDk: string | null;

  @Column("text", { name: "team_description_se", nullable: true })
  teamDescriptionSe: string | null;

  @Column("text", { name: "team_description_fi", nullable: true })
  teamDescriptionFi: string | null;

  @Column("text", { name: "team_description_nl", nullable: true })
  teamDescriptionNl: string | null;

  @Column("text", { name: "team_description_it", nullable: true })
  teamDescriptionIt: string | null;

  @Column("text", { name: "team_description_de", nullable: true })
  teamDescriptionDe: string | null;

  @Column("text", { name: "team_description_fr", nullable: true })
  teamDescriptionFr: string | null;

  @Column("smallint", {
    name: "team_viewed",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  teamViewed: number | null;

  @Column("varchar", { name: "delivery_type", nullable: true, length: 64 })
  deliveryType: string | null;

  @Column("tinyint", {
    name: "is_tournament",
    unsigned: true,
    default: () => "'0'",
  })
  isTournament: number;

  @Column("tinyint", {
    name: "is_national_team",
    width: 1,
    default: () => "'0'",
  })
  isNationalTeam: boolean;

  @Column("varchar", { name: "team_image", nullable: true, length: 255 })
  teamImage: string | null;

  @Column("varchar", { name: "team_logo", nullable: true, length: 254 })
  teamLogo: string | null;

  @Column("varchar", { name: "team_bg", nullable: true, length: 128 })
  teamBg: string | null;

  @Column("varchar", { name: "special_picture", nullable: true, length: 254 })
  specialPicture: string | null;

  @Column("varchar", {
    name: "special_picture_link",
    nullable: true,
    length: 254,
  })
  specialPictureLink: string | null;

  @Column("varchar", {
    name: "most_popular_picture",
    nullable: true,
    length: 254,
  })
  mostPopularPicture: string | null;

  @Column("varchar", { name: "year_show", nullable: true, length: 16 })
  yearShow: string | null;

  @Column("tinyint", {
    name: "menu_active",
    unsigned: true,
    default: () => "'0'",
  })
  menuActive: number;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;

  @Column("varchar", { name: "color", nullable: true, length: 45 })
  color: string | null;

  @Column("tinyint", {
    name: "is_exchange",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isExchange: boolean | null;

  @Column("text", { name: "similar_name", nullable: true })
  similarName: string | null;

  @Column("tinyint", {
    name: "is_international",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isInternational: boolean | null;
}
