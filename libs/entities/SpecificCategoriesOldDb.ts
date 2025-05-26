import { Column, Entity, Index } from "typeorm";

@Index("category_id", ["categoryId"], {})
@Index("venue_id", ["venueId"], {})
@Index("tournament_id", ["tournamentId"], {})
@Entity("specific_categories_old_db", { schema: "ftn_db_main" })
export class SpecificCategoriesOldDb {
  @Column("int", { name: "category_id", nullable: true, unsigned: true })
  categoryId: number | null;

  @Column("int", { name: "venue_id", nullable: true, unsigned: true })
  venueId: number | null;

  @Column("int", { name: "tournament_id", nullable: true, unsigned: true })
  tournamentId: number | null;

  @Column("varchar", {
    name: "category_description",
    nullable: true,
    length: 255,
  })
  categoryDescription: string | null;

  @Column("text", { name: "category_extra", nullable: true })
  categoryExtra: string | null;

  @Column("tinyint", { name: "singles", nullable: true, width: 1 })
  singles: boolean | null;
}
