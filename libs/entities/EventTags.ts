import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("event_tags", { schema: "ftn_db_main" })
export class EventTags {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "tag", nullable: true, length: 128 })
  tag: string | null;

  @Column("varchar", { name: "tag_image", nullable: true, length: 255 })
  tagImage: string | null;

  @Column("int", { name: "update_timestamp", nullable: true })
  updateTimestamp: number | null;
}
