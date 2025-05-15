import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("js_ip", { schema: "ftn_db_main" })
export class JsIp {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;
}
