import { Column, Entity, Index } from "typeorm";

@Index("super_promote_id", ["superPromotedId"], {})
@Index("team_id", ["teamId"], {})
@Index("team_id_2", ["teamId"], {})
@Entity("super_promoted", { schema: "ftn_db_main" })
export class SuperPromoted {
  @Column("tinyint", {
    name: "super_promoted_id",
    unsigned: true,
    default: () => "'0'",
  })
  superPromotedId: number;

  @Column("smallint", {
    name: "team_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  teamId: number | null;

  @Column("tinyint", { name: "priority", unsigned: true, default: () => "'0'" })
  priority: number;

  @Column("tinyint", { name: "tournament", default: () => "'0'" })
  tournament: number;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;
}
