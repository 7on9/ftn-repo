import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("email_address", ["emailAddress"], {})
@Index("ip_address", ["ipAddress"], {})
@Index("timestamp", ["timestamp"], {})
@Entity("customers_log", { schema: "ftn_db_main" })
export class CustomersLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "order_id", nullable: true, length: 50 })
  orderId: string | null;

  @Column("varchar", { name: "email_address", nullable: true, length: 512 })
  emailAddress: string | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;

  @Column("int", { name: "timestamp", unsigned: true, default: () => "'0'" })
  timestamp: number;

  @Column("varchar", { name: "source", nullable: true, length: 50 })
  source: string | null;

  @Column("varchar", { name: "ip_country", nullable: true, length: 255 })
  ipCountry: string | null;
}
