import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("order_more_payment", { schema: "ftn_db_main" })
export class OrderMorePayment {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  added: number | null;

  @Column("float", {
    name: "amount",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 16 })
  currency: string | null;

  @Column("varchar", { name: "payment_status", nullable: true, length: 64 })
  paymentStatus: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("float", {
    name: "more_fee",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  moreFee: number | null;

  @Column("varchar", {
    name: "more_type",
    nullable: true,
    length: 20,
    default: () => "'MORE'",
  })
  moreType: string | null;

  @Column("text", { name: "ticket_detail", nullable: true })
  ticketDetail: string | null;
}
