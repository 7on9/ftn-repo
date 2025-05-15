import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email_address", ["emailAddress"], {})
@Index("ip_address", ["ipAddress"], {})
@Entity("blacklist", { schema: "ftn_db_main" })
export class Blacklist {
  @PrimaryGeneratedColumn({ type: "int", name: "blacklist_id", unsigned: true })
  blacklistId: number;

  @Column("int", {
    name: "source_order_id",
    unsigned: true,
    default: () => "'0'",
  })
  sourceOrderId: number;

  @Column("varchar", { name: "email_address", nullable: true, length: 250 })
  emailAddress: string | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;

  @Column("int", { name: "inserted", unsigned: true, default: () => "'0'" })
  inserted: number;

  @Column("int", {
    name: "date_inserted",
    unsigned: true,
    default: () => "'0'",
  })
  dateInserted: number;

  @Column("varchar", { name: "address", nullable: true, length: 254 })
  address: string | null;

  @Column("varchar", { name: "phone_number", nullable: true, length: 100 })
  phoneNumber: string | null;

  @Column("varchar", { name: "mobile_number", nullable: true, length: 100 })
  mobileNumber: string | null;

  @Column("varchar", { name: "card_number", nullable: true, length: 50 })
  cardNumber: string | null;
}
