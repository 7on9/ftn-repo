import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("blocked_ip", { schema: "ftn_db_main" })
export class BlockedIp {
  @PrimaryGeneratedColumn({ type: "int", name: "block_id" })
  blockId: number;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;
}
