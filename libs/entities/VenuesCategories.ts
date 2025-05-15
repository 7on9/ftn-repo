import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("venues_categories", { schema: "ftn_db_main" })
export class VenuesCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "venue_id", nullable: true, default: () => "'0'" })
  venueId: number | null;

  @Column("varchar", { name: "categories", nullable: true, length: 550 })
  categories: string | null;
}
