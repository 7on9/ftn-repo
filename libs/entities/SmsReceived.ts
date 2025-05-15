import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("phone", ["phone", "orderId", "smsReceived"], {})
@Entity("sms_received", { schema: "ftn_db_main" })
export class SmsReceived {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "phone", nullable: true, length: 64 })
  phone: string | null;

  @Column("text", { name: "message", nullable: true })
  message: string | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "sms_received",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  smsReceived: number | null;
}
