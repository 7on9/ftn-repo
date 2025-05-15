import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comment_template", { schema: "ftn_db_main" })
export class CommentTemplate {
  @PrimaryGeneratedColumn({ type: "int", name: "template_id" })
  templateId: number;

  @Column("int", { name: "sorter", default: () => "'0'" })
  sorter: number;

  @Column("varchar", { name: "template_title", nullable: true, length: 64 })
  templateTitle: string | null;

  @Column("text", { name: "template_text", nullable: true })
  templateText: string | null;

  @Column("varchar", { name: "roles", nullable: true, length: 256 })
  roles: string | null;

  @Column("varchar", { name: "department", nullable: true, length: 255 })
  department: string | null;

  @Column("varchar", { name: "issue", nullable: true, length: 255 })
  issue: string | null;
}
