import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("admin_id", ["adminId"], {})
@Index("added", ["added"], {})
@Index("answered", ["answered"], {})
@Index("seen", ["seen"], {})
@Index("category", ["category"], {})
@Entity("orders_questions", { schema: "ftn_db_main" })
export class OrdersQuestions {
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

  @Column("text", { name: "question", nullable: true })
  question: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 32 })
  category: string | null;

  @Column("text", { name: "answer", nullable: true })
  answer: string | null;

  @Column("tinyint", {
    name: "answered_as_task",
    width: 1,
    default: () => "'0'",
  })
  answeredAsTask: boolean;

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

  @Column("tinyint", { name: "admin", default: () => "'0'" })
  admin: number;
}
