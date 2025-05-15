import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("seating_venue", ["seatingVenue", "seatingCategory"], {})
@Index("seating_tournament", ["seatingTournament"], {})
@Index("seating_date", ["seatingDate"], {})
@Index(
  "idx_seating_plan_venue_category",
  ["seatingCategory", "seatingVenue"],
  {}
)
@Entity("seating_plan", { schema: "ftn_db_main" })
export class SeatingPlan {
  @PrimaryGeneratedColumn({ type: "int", name: "seating_id", unsigned: true })
  seatingId: number;

  @Column("int", {
    name: "seating_venue",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  seatingVenue: number | null;

  @Column("int", {
    name: "seating_tournament",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  seatingTournament: number | null;

  @Column("int", {
    name: "seating_category",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  seatingCategory: number | null;

  @Column("varchar", { name: "seating_image", nullable: true, length: 254 })
  seatingImage: string | null;

  @Column("int", {
    name: "seating_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  seatingDate: number | null;
}
