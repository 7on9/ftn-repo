import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ip_address", ["ipAddress"], { unique: true })
@Entity("ip_control_data", { schema: "ftn_db_main" })
export class IpControlData {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "ip_control_data_id",
    unsigned: true,
  })
  ipControlDataId: number;

  @Column("varchar", {
    name: "ip_address",
    nullable: true,
    unique: true,
    length: 45,
  })
  ipAddress: string | null;

  @Column("float", {
    name: "add_price",
    unsigned: true,
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  addPrice: number;

  @Column("varchar", { name: "ip_comment", nullable: true, length: 254 })
  ipComment: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
