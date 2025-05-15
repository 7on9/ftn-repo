import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("incoming_requests", { schema: "ftn_db_main" })
export class IncomingRequests {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("int", {
    name: "category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  categoryId: number | null;

  @Column("int", {
    name: "quantity",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  quantity: number | null;

  @Column("text", { name: "request", nullable: true })
  request: string | null;

  @Column("varchar", {
    name: "request_type",
    nullable: true,
    comment: "email,chat",
    length: 50,
  })
  requestType: string | null;

  @Column("int", { name: "request_time", nullable: true })
  requestTime: number | null;

  @Column("varchar", { name: "customer_email", nullable: true, length: 256 })
  customerEmail: string | null;

  @Column("int", {
    name: "created_time",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  createdTime: number | null;

  @Column("int", {
    name: "updated_time",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  updatedTime: number | null;
}
