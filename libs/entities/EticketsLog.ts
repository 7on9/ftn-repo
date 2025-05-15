import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("eticket_id", ["eticketId"], {})
@Index("order_id", ["orderId"], {})
@Index("ip_address", ["ipAddress"], {})
@Entity("etickets_log", { schema: "ftn_db_main" })
export class EticketsLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "eticket_id", unsigned: true, default: () => "'0'" })
  eticketId: number;

  @Column("int", { name: "order_id", unsigned: true, default: () => "'0'" })
  orderId: number;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;

  @Column("int", { name: "time_stamp", unsigned: true, default: () => "'0'" })
  timeStamp: number;
}
