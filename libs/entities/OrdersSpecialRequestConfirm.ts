import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("admin_id", ["adminId"], {})
@Index("added", ["added"], {})
@Index("answered", ["answered"], {})
@Index("seen", ["seen"], {})
@Index("category", ["approved"], {})
@Entity("orders_special_request_confirm", { schema: "ftn_db_main" })
export class OrdersSpecialRequestConfirm {
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
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  added: number | null;

  @Column("text", { name: "request", nullable: true })
  request: string | null;

  @Column("binary", { name: "approved", nullable: true, length: 1 })
  approved: Buffer | null;

  @Column("binary", { name: "extra_fee", nullable: true, length: 1 })
  extraFee: Buffer | null;

  @Column("int", { name: "amount", nullable: true, default: () => "'0'" })
  amount: number | null;

  @Column("tinytext", { name: "answer", nullable: true })
  answer: string | null;

  @Column("tinyint", { name: "answered", width: 1, default: () => "'0'" })
  answered: boolean;

  @Column("int", {
    name: "date_answered",
    nullable: true,
    default: () => "'0'",
  })
  dateAnswered: number | null;

  @Column("tinyint", { name: "seen", width: 1, default: () => "'0'" })
  seen: boolean;

  @Column("int", {
    name: "date_seen",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateSeen: number | null;
}
