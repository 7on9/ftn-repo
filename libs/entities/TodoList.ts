import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Index("admin_id", ["adminId"], {})
@Index("added", ["added"], {})
@Index("done", ["done"], {})
@Index("dismissed", ["dismissed"], {})
@Index("event_id", ["eventId"], {})
@Entity("todo_list", { schema: "ftn_db_main" })
export class TodoList {
  @PrimaryGeneratedColumn({ type: "int", name: "todo_id", unsigned: true })
  todoId: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "tasker",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  tasker: number | null;

  @Column("text", { name: "task", nullable: true })
  task: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 32 })
  category: string | null;

  @Column("int", {
    name: "added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  added: number | null;

  @Column("int", {
    name: "done_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  doneDate: number | null;

  @Column("tinyint", { name: "done", width: 1, default: () => "'0'" })
  done: boolean;

  @Column("tinyint", { name: "dismissed", width: 1, default: () => "'0'" })
  dismissed: boolean;

  @Column("tinyint", { name: "urgency", width: 1, default: () => "'0'" })
  urgency: boolean;

  @Column("int", { name: "user_edit", nullable: true })
  userEdit: number | null;

  @Column("int", { name: "edit_date", nullable: true })
  editDate: number | null;
}
