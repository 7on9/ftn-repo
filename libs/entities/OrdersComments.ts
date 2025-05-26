import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("date_written", ["dateWritten"], {})
@Index("comment_text", ["commentText"], {})
@Index("order_id_2", ["orderId", "dateWritten"], {})
@Index("order_id_3", ["orderId", "dateWritten"], {})
@Index("order_id_4", ["orderId", "dateWritten"], {})
@Index("order_id_5", ["orderId", "dateWritten"], {})
@Entity("orders_comments", { schema: "ftn_db_main" })
export class OrdersComments {
  @PrimaryGeneratedColumn({ type: "int", name: "comment_id", unsigned: true })
  commentId: number;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("text", { name: "comment_text", nullable: true })
  commentText: string | null;

  @Column("int", {
    name: "date_written",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateWritten: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;

  @Column("varchar", { name: "media", nullable: true, length: 32 })
  media: string | null;

  @Column("tinyint", { name: "highlight", width: 1, default: () => "'0'" })
  highlight: boolean;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
