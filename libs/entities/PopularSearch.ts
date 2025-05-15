import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tag_name", ["tagName"], {})
@Entity("popular_search", { schema: "ftn_db_main" })
export class PopularSearch {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "popular_search_id" })
  popularSearchId: number;

  @Column("varchar", { name: "tag_name", nullable: true, length: 3 })
  tagName: string | null;

  @Column("varchar", { name: "tag_value", nullable: true, length: 128 })
  tagValue: string | null;

  @Column("varchar", { name: "tag_link", nullable: true, length: 254 })
  tagLink: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;
}
