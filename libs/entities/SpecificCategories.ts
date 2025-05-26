import { Column, Entity } from "typeorm";

@Entity("specific_categories", { schema: "ftn_db_main" })
export class SpecificCategories {
  @Column("int", {
    name: "category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  categoryId: number | null;

  @Column("int", {
    name: "venue_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  venueId: number | null;

  @Column("int", {
    name: "tournament_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  tournamentId: number | null;

  @Column("varchar", {
    name: "category_description",
    nullable: true,
    length: 255,
  })
  categoryDescription: string | null;

  @Column("varchar", {
    name: "category_description_es",
    nullable: true,
    length: 255,
  })
  categoryDescriptionEs: string | null;

  @Column("varchar", {
    name: "category_description_dk",
    nullable: true,
    length: 255,
  })
  categoryDescriptionDk: string | null;

  @Column("varchar", {
    name: "category_description_se",
    nullable: true,
    length: 255,
  })
  categoryDescriptionSe: string | null;

  @Column("varchar", {
    name: "category_description_fi",
    nullable: true,
    length: 255,
  })
  categoryDescriptionFi: string | null;

  @Column("varchar", {
    name: "category_description_nl",
    nullable: true,
    length: 255,
  })
  categoryDescriptionNl: string | null;

  @Column("varchar", {
    name: "category_description_it",
    nullable: true,
    length: 255,
  })
  categoryDescriptionIt: string | null;

  @Column("varchar", {
    name: "category_description_de",
    nullable: true,
    length: 255,
  })
  categoryDescriptionDe: string | null;

  @Column("varchar", {
    name: "category_description_fr",
    nullable: true,
    length: 255,
  })
  categoryDescriptionFr: string | null;

  @Column("text", { name: "category_extra", nullable: true })
  categoryExtra: string | null;

  @Column("text", { name: "category_extra_es", nullable: true })
  categoryExtraEs: string | null;

  @Column("text", { name: "category_extra_dk", nullable: true })
  categoryExtraDk: string | null;

  @Column("text", { name: "category_extra_se", nullable: true })
  categoryExtraSe: string | null;

  @Column("text", { name: "category_extra_fi", nullable: true })
  categoryExtraFi: string | null;

  @Column("text", { name: "category_extra_nl", nullable: true })
  categoryExtraNl: string | null;

  @Column("text", { name: "category_extra_it", nullable: true })
  categoryExtraIt: string | null;

  @Column("text", { name: "category_extra_de", nullable: true })
  categoryExtraDe: string | null;

  @Column("text", { name: "category_extra_fr", nullable: true })
  categoryExtraFr: string | null;

  @Column("tinyint", { name: "singles", width: 1, default: () => "'0'" })
  singles: boolean;

  @Column("int", {
    name: "ticket_type",
    nullable: true,
    comment: "Same with column eticket in table tickets",
    default: () => "'0'",
  })
  ticketType: number | null;

  @Column("varchar", { name: "split_type", nullable: true, length: 100 })
  splitType: string | null;
}
