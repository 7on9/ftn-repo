import { Column, Entity, Index } from "typeorm";

@Index("admin_id", ["adminId", "key", "val"], {})
@Entity("admins_settings", { schema: "ftn_db_main" })
export class AdminsSettings {
  @Column("int", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("varchar", { name: "key", nullable: true, length: 32 })
  key: string | null;

  @Column("varchar", { name: "val", nullable: true, length: 32 })
  val: string | null;
}
