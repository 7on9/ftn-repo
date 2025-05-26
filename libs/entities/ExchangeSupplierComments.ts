import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("exchange_supplier_comments", { schema: "ftn_db_main" })
export class ExchangeSupplierComments {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "exchange_supplier_comments_id",
    unsigned: true,
  })
  exchangeSupplierCommentsId: number;

  @Column("int", { name: "order_id", unsigned: true })
  orderId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", {
    name: "is_admin_message",
    unsigned: true,
    default: () => "'0'",
  })
  isAdminMessage: number;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Column("int", { name: "insert_time", nullable: true })
  insertTime: number | null;
}
