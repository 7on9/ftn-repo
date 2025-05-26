import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("notifications", { schema: "ftn_db_main" })
export class Notifications {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "content" })
  content: string;

  @Column("int", { name: "admin_id", nullable: true })
  adminId: number | null;

  @Column("int", { name: "timestamp", nullable: true })
  timestamp: number | null;
}
