import { Column, Entity, Index } from "typeorm";

@Index("ip_address", ["ipAddress"], { unique: true })
@Entity("exclude_ip", { schema: "ftn_db_main" })
export class ExcludeIp {
  @Column("varchar", { name: "ip_address", length: 45 })
  ipAddress: string;
}
