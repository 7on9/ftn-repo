import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("feed", ["feed"], {})
@Entity("feeds", { schema: "ftn_db_main" })
export class Feeds {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "feed", nullable: true, length: 10 })
  feed: string | null;

  @Column("int", { name: "team_id", default: () => "'0'" })
  teamId: number;
}
