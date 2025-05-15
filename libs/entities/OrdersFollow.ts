import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("comment_id", ["commentId"], { unique: true })
@Index("order_id", ["orderId"], {})
@Entity("orders_follow", { schema: "ftn_db_main" })
export class OrdersFollow {
  @PrimaryGeneratedColumn({ type: "int", name: "follow_id", unsigned: true })
  followId: number;

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
    name: "date_written",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateWritten: number | null;

  @Column("int", {
    name: "follow_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  followDate: number | null;

  @Column("int", {
    name: "comment_id",
    nullable: true,
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  commentId: number | null;

  @Column("tinyint", { name: "follow_done", width: 1, default: () => "'0'" })
  followDone: boolean;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("text", { name: "personal_note", nullable: true })
  personalNote: string | null;
}
