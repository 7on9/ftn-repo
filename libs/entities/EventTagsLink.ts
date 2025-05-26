import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tag_id", ["tagId"], {})
@Index("event_id", ["eventId"], {})
@Entity("event_tags_link", { schema: "ftn_db_main" })
export class EventTagsLink {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "tag_id", unsigned: true, default: () => "'0'" })
  tagId: number;

  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;
}
