import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("venues_seating", { schema: "ftn_db_main" })
export class VenuesSeating {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "venue_id", nullable: true, default: () => "'0'" })
  venueId: number | null;

  @Column("int", { name: "category_id", nullable: true, default: () => "'0'" })
  categoryId: number | null;

  @Column("varchar", { name: "block", nullable: true, length: 256 })
  block: string | null;
}
