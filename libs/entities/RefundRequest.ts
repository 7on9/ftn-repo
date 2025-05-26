import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("refund_request", { schema: "ftn_db_main" })
export class RefundRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "first_name", nullable: true, length: 64 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 64 })
  lastName: string | null;

  @Column("varchar", { name: "email_address", nullable: true, length: 256 })
  emailAddress: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 64 })
  phone: string | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("text", { name: "reason", nullable: true })
  reason: string | null;

  @Column("int", {
    name: "timestamp",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  timestamp: number | null;
}
