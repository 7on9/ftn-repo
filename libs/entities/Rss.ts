import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rss", { schema: "ftn_db_main" })
export class Rss {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "team_id", nullable: true, default: () => "'0'" })
  teamId: number | null;

  @Column("varchar", { name: "feed_url", nullable: true, length: 254 })
  feedUrl: string | null;

  @Column("varchar", { name: "file", nullable: true, length: 50 })
  file: string | null;
}
