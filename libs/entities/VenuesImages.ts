import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("venues_images", { schema: "ftn_db_main" })
export class VenuesImages {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "venue_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  venueId: number | null;

  @Column("varchar", { name: "image", nullable: true, length: 256 })
  image: string | null;

  @Column("tinyint", { name: "seating", width: 1, default: () => "'0'" })
  seating: boolean;
}
