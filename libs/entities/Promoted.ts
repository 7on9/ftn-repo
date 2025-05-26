import { Column, Entity, Index } from "typeorm";

@Index("super_promote_id", ["promotedId"], {})
@Entity("promoted", { schema: "ftn_db_main" })
export class Promoted {
  @Column("tinyint", {
    name: "promoted_id",
    unsigned: true,
    default: () => "'0'",
  })
  promotedId: number;

  @Column("smallint", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;
}
