import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ip_address", ["ipAddress"], {})
@Index("address", ["address"], {})
@Index("city", ["city"], {})
@Index("phone", ["phone"], {})
@Index("mobile_phone", ["mobilePhone"], {})
@Entity("uefa_blacklist", { schema: "ftn_db_main" })
export class UefaBlacklist {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 32 })
  ipAddress: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 64 })
  address: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 32 })
  city: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 32 })
  phone: string | null;

  @Column("varchar", { name: "mobile_phone", nullable: true, length: 32 })
  mobilePhone: string | null;
}
