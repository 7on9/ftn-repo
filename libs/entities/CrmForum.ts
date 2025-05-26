import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crm_forum", { schema: "ftn_db_main" })
export class CrmForum {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 256 })
  name: string | null;

  @Column("varchar", { name: "user", nullable: true, length: 50 })
  user: string | null;

  @Column("varchar", { name: "pass", nullable: true, length: 25 })
  pass: string | null;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Column("tinyint", { name: "social", width: 1, default: () => "'0'" })
  social: boolean;
}
