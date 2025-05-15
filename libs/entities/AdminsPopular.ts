import { Column, Entity } from "typeorm";

@Entity("admins_popular", { schema: "ftn_db_main" })
export class AdminsPopular {
  @Column("int", { primary: true, name: "admin_id", unsigned: true })
  adminId: number;

  @Column("text", { name: "popular_link", nullable: true })
  popularLink: string | null;
}
