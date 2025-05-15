import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_id", ["adminId"], {})
@Index("inactive_end", ["inactiveEnd"], {})
@Entity("admins_active", { schema: "ftn_db_main" })
export class AdminsActive {
  @PrimaryGeneratedColumn({ type: "int", name: "log_id", unsigned: true })
  logId: number;

  @Column("int", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("int", {
    name: "inactive_start",
    unsigned: true,
    default: () => "'0'",
  })
  inactiveStart: number;

  @Column("int", { name: "inactive_end", nullable: true, unsigned: true })
  inactiveEnd: number | null;
}
