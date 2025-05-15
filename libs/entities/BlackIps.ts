import { Column, Entity, Index } from "typeorm";

@Index("ip_address", ["ipAddress"], { unique: true })
@Entity("black_ips", { schema: "ftn_db_main" })
export class BlackIps {
  @Column("varchar", { name: "ip_address", length: 45 })
  ipAddress: string;
}
