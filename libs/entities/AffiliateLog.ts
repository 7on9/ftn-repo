import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("affiliate_log", { schema: "ftn_db_main" })
export class AffiliateLog {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "affiliate_log_id",
    unsigned: true,
  })
  affiliateLogId: number;

  @Column("int", { name: "supplier_id", unsigned: true })
  supplierId: number;

  @Column("varchar", { name: "supplier_ip", length: 50 })
  supplierIp: string;

  @Column("int", { name: "timestamp" })
  timestamp: number;
}
