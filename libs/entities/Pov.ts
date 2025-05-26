import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQE", ["povVenue", "povCategory"], {})
@Entity("pov", { schema: "ftn_db_main" })
export class Pov {
  @PrimaryGeneratedColumn({ type: "int", name: "pov_id" })
  povId: number;

  @Column("int", {
    name: "pov_venue",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  povVenue: number | null;

  @Column("int", {
    name: "pov_category",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  povCategory: number | null;

  @Column("varchar", { name: "pov_image", nullable: true, length: 254 })
  povImage: string | null;
}
