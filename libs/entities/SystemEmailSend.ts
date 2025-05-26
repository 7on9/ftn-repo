import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("system_email_send", { schema: "ftn_db_main" })
export class SystemEmailSend {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "admin_id", nullable: true })
  adminId: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("int", { name: "timestamp", nullable: true })
  timestamp: number | null;
}
