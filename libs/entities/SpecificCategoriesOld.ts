import { Column, Entity, Index } from "typeorm";

@Index("category_id", ["categoryId"], {})
@Index("venue_id", ["venueId"], {})
@Entity("specific_categories_old", { schema: "ftn_db_main" })
export class SpecificCategoriesOld {
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

  @Column("varchar", {
    name: "category_description",
    nullable: true,
    length: 255,
  })
  categoryDescription: string | null;

  @Column("text", { name: "category_extra", nullable: true })
  categoryExtra: string | null;
}
