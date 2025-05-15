import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reviews", { schema: "ftn_db_main" })
export class Reviews {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "reviewer", nullable: true, default: () => "'0'" })
  reviewer: number | null;

  @Column("varchar", { name: "title", nullable: true, length: 250 })
  title: string | null;

  @Column("text", { name: "review", nullable: true })
  review: string | null;

  @Column("varchar", { name: "websites", nullable: true, length: 250 })
  websites: string | null;

  @Column("tinyint", { name: "done", width: 1, default: () => "'0'" })
  done: boolean;
}
