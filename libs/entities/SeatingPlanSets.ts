import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seating_plan_sets", { schema: "ftn_db_main" })
export class SeatingPlanSets {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "venue_id", nullable: true, default: () => "'0'" })
  venueId: number | null;

  @Column("text", { name: "categories", nullable: true })
  categories: string | null;

  @Column("varchar", { name: "svg_path", nullable: true, length: 500 })
  svgPath: string | null;
}
