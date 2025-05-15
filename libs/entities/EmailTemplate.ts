import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_template", { schema: "ftn_db_main" })
export class EmailTemplate {
  @PrimaryGeneratedColumn({ type: "int", name: "template_id" })
  templateId: number;

  @Column("varchar", { name: "template_name", nullable: true, length: 255 })
  templateName: string | null;

  @Column("varchar", { name: "template_title", nullable: true, length: 256 })
  templateTitle: string | null;

  @Column("text", { name: "template_text", nullable: true })
  templateText: string | null;

  @Column("varchar", { name: "roles", nullable: true, length: 255 })
  roles: string | null;

  @Column("varchar", {
    name: "template_department",
    nullable: true,
    length: 255,
  })
  templateDepartment: string | null;

  @Column("varchar", { name: "template_issue", nullable: true, length: 255 })
  templateIssue: string | null;

  @Column("int", { name: "is_deleted", default: () => "'0'" })
  isDeleted: number;
}
