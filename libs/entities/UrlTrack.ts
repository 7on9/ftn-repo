import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("timestamp", ["timestamp"], {})
@Entity("url_track", { schema: "ftn_db_main" })
export class UrlTrack {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "timestamp", unsigned: true, default: () => "'0'" })
  timestamp: number;

  @Column("varchar", { name: "page", nullable: true, length: 255 })
  page: string | null;
}
