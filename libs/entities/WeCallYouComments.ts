import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("we_call_you_comments", { schema: "ftn_db_main" })
export class WeCallYouComments {
  @PrimaryGeneratedColumn({ type: "int", name: "comment_id" })
  commentId: number;

  @Column("int", {
    name: "we_call_you_id",
    nullable: true,
    default: () => "'0'",
  })
  weCallYouId: number | null;

  @Column("int", { name: "admin_id", nullable: true, default: () => "'0'" })
  adminId: number | null;

  @Column("varchar", { name: "comment_text", nullable: true, length: 255 })
  commentText: string | null;

  @Column("int", { name: "added", nullable: true, default: () => "'0'" })
  added: number | null;
}
