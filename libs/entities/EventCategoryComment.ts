import { Column, Entity, Index } from "typeorm";

@Index("event_id", ["eventId"], {})
@Entity("event_category_comment", { schema: "ftn_db_main" })
export class EventCategoryComment {
  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;

  @Column("int", { name: "category_id", unsigned: true, default: () => "'0'" })
  categoryId: number;

  @Column("varchar", { name: "comment", nullable: true, length: 128 })
  comment: string | null;

  @Column("varchar", { name: "ftn_comment", nullable: true, length: 255 })
  ftnComment: string | null;

  @Column("varchar", { name: "color", nullable: true, length: 20 })
  color: string | null;
}
