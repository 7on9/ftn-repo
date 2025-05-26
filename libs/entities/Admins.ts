import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_email", ["adminEmail", "adminRole"], {})
@Entity("admins", { schema: "ftn_db_main" })
export class Admins {
  @PrimaryGeneratedColumn({ type: "int", name: "admin_id", unsigned: true })
  adminId: number;

  @Column("varchar", { name: "admin_email", nullable: true, length: 255 })
  adminEmail: string | null;

  @Column("varchar", { name: "admin_password", nullable: true, length: 255 })
  adminPassword: string | null;

  @Column("tinyint", {
    name: "admin_role",
    unsigned: true,
    default: () => "'0'",
  })
  adminRole: number;

  @Column("text", { name: "admin_access", nullable: true })
  adminAccess: string | null;

  @Column("tinyint", { name: "is_active", default: () => "'0'" })
  isActive: number;

  @Column("varchar", { name: "twofa_secret", nullable: true, length: 255 })
  twofaSecret: string | null;

  @Column("tinyint", { name: "is_2fa_setup", width: 1, default: () => "'0'" })
  is_2faSetup: boolean;

  @Column("int", {
    name: "failed_attempts",
    nullable: true,
    default: () => "'0'",
  })
  failedAttempts: number | null;

  @Column("timestamp", { name: "last_attempt", nullable: true })
  lastAttempt: Date | null;
}
