import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("added", ["added"], {})
@Index("edited", ["edited"], {})
@Index("admin_id", ["adminId"], {})
@Index("live", ["live"], {})
@Entity("blog_posts", { schema: "ftn_db_main" })
export class BlogPosts {
  @PrimaryGeneratedColumn({ type: "int", name: "post_id", unsigned: true })
  postId: number;

  @Column("int", { name: "added", unsigned: true, default: () => "'0'" })
  added: number;

  @Column("int", { name: "edited", unsigned: true, default: () => "'0'" })
  edited: number;

  @Column("int", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("varchar", { name: "thumbnail", nullable: true, length: 128 })
  thumbnail: string | null;

  @Column("varchar", { name: "alt", nullable: true, length: 64 })
  alt: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("tinyint", { name: "live", width: 1, default: () => "'0'" })
  live: boolean;

  @Column("int", { name: "team_related", default: () => "'0'" })
  teamRelated: number;
}
