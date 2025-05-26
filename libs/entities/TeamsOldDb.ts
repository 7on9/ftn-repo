import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("team_country_id", ["teamCountryId", "isTournament", "menuActive"], {})
@Entity("teams_old_db", { schema: "ftn_db_main" })
export class TeamsOldDb {
  @PrimaryGeneratedColumn({ type: "smallint", name: "team_id", unsigned: true })
  teamId: number;

  @Column("varchar", { name: "team_name", nullable: true, length: 255 })
  teamName: string | null;

  @Column("varchar", { name: "team_second_name", nullable: true, length: 255 })
  teamSecondName: string | null;

  @Column("varchar", { name: "team_short_name", nullable: true, length: 16 })
  teamShortName: string | null;

  @Column("int", { name: "team_venue_id", nullable: true, unsigned: true })
  teamVenueId: number | null;

  @Column("tinyint", {
    name: "team_country_id",
    nullable: true,
    unsigned: true,
  })
  teamCountryId: number | null;

  @Column("text", { name: "team_description", nullable: true })
  teamDescription: string | null;

  @Column("smallint", { name: "team_viewed", nullable: true, unsigned: true })
  teamViewed: number | null;

  @Column("varchar", { name: "delivery_type", nullable: true, length: 64 })
  deliveryType: string | null;

  @Column("tinyint", { name: "is_tournament", nullable: true, unsigned: true })
  isTournament: number | null;

  @Column("tinyint", { name: "is_national_team", nullable: true, width: 1 })
  isNationalTeam: boolean | null;

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

  @Column("tinyint", { name: "menu_active", nullable: true, unsigned: true })
  menuActive: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;

  @Column("varchar", { name: "color", nullable: true, length: 45 })
  color: string | null;
}
