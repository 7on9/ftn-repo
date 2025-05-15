import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("orders_event_change", { schema: "ftn_db_main" })
export class OrdersEventChange {
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
    name: "new_event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  newEventId: number | null;

  @Column("int", {
    name: "new_category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  newCategoryId: number | null;

  @Column("int", {
    name: "new_qty",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  newQty: number | null;

  @Column("float", {
    name: "new_ppt",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  newPpt: number | null;

  @Column("float", {
    name: "new_booking_fee",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  newBookingFee: number | null;

  @Column("varchar", { name: "new_delivery_name", nullable: true, length: 32 })
  newDeliveryName: string | null;

  @Column("float", {
    name: "new_delivery_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  newDeliveryPrice: number | null;

  @Column("float", {
    name: "new_total",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  newTotal: number | null;

  @Column("float", {
    name: "old_total",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  oldTotal: number | null;

  @Column("float", {
    name: "difference",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  difference: number | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "timestamp",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  timestamp: number | null;

  @Column("tinyint", { name: "approved", width: 1, default: () => "'0'" })
  approved: boolean;

  @Column("int", { name: "new_ticket_id", nullable: true })
  newTicketId: number | null;
}
