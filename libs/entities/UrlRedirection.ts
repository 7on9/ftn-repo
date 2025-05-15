import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("old_url", ["oldUrl"], { unique: true })
@Entity("url_redirection", { schema: "ftn_db_main" })
export class UrlRedirection {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "old_url",
    nullable: true,
    unique: true,
    length: 255,
  })
  oldUrl: string | null;

  @Column("varchar", { name: "new_url", nullable: true, length: 255 })
  newUrl: string | null;
}
