import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("notification_admins", { schema: "ftn_db_main" })
export class NotificationAdmins {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "notification_id" })
  notificationId: number;

  @Column("int", { name: "admin_id" })
  adminId: number;

  @Column("int", { name: "timestamp", nullable: true })
  timestamp: number | null;
}
