import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("js_not_active", { schema: "ftn_db_main" })
export class JsNotActive {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "ip_address", nullable: true, length: 20 })
  ipAddress: string | null;
}
