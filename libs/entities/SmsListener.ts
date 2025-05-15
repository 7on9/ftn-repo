import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("phone", ["phone", "orderId", "openUntil"], {})
@Entity("sms_listener", { schema: "ftn_db_main" })
export class SmsListener {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "phone", nullable: true, length: 64 })
  phone: string | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "open_until",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  openUntil: number | null;
}
