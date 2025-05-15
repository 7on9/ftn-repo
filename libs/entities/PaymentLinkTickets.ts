import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pl_ticket_token", ["token"], {})
@Index("pl_ticket_event_id", ["eventId"], {})
@Index("pl_ticket_order_id", ["orderId"], {})
@Entity("payment_link_tickets", { schema: "ftn_db_main" })
export class PaymentLinkTickets {
  @PrimaryGeneratedColumn({ type: "int", name: "ticket_id", unsigned: true })
  ticketId: number;

  @Column("varchar", { name: "token", nullable: true, length: 64 })
  token: string | null;

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

  @Column("int", {
    name: "origin_ticket_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  originTicketId: number | null;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("varchar", { name: "category_name", nullable: true, length: 250 })
  categoryName: string | null;

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

  @Column("float", {
    name: "more_price",
    nullable: true,
    unsigned: true,
    precision: 16,
    scale: 2,
    default: () => "'0.00'",
  })
  morePrice: number | null;

  @Column("float", {
    name: "more_booking_fee",
    nullable: true,
    unsigned: true,
    precision: 16,
    scale: 2,
    default: () => "'0.00'",
  })
  moreBookingFee: number | null;

  @Column("int", { name: "ticket_type_id", default: () => "'0'" })
  ticketTypeId: number;

  @Column("tinyint", { name: "fast", width: 1, default: () => "'0'" })
  fast: boolean;

  @Column("tinyint", { name: "special", width: 1, default: () => "'0'" })
  special: boolean;

  @Column("int", {
    name: "discount",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  discount: number | null;

  @Column("tinyint", { name: "singles", width: 1, default: () => "'0'" })
  singles: boolean;

  @Column("varchar", { name: "block", nullable: true, length: 50 })
  block: string | null;

  @Column("varchar", { name: "row", nullable: true, length: 50 })
  row: string | null;

  @Column("varchar", {
    name: "split_type",
    nullable: true,
    length: 50,
    default: () => "'ANY'",
  })
  splitType: string | null;

  @Column("tinyint", {
    name: "view_type",
    nullable: true,
    default: () => "'0'",
  })
  viewType: number | null;

  @Column("varchar", {
    name: "age_group",
    nullable: true,
    length: 50,
    default: () => "'ADULT'",
  })
  ageGroup: string | null;

  @Column("varchar", { name: "seat_from", nullable: true, length: 50 })
  seatFrom: string | null;

  @Column("varchar", { name: "seat_to", nullable: true, length: 10 })
  seatTo: string | null;

  @Column("varchar", { name: "pov_image", nullable: true, length: 254 })
  povImage: string | null;

  @Column("mediumtext", { name: "ticket_comment", nullable: true })
  ticketComment: string | null;

  @Column("varchar", { name: "fans_side", nullable: true, length: 254 })
  fansSide: string | null;

  @Column("int", { name: "vip_package", nullable: true })
  vipPackage: number | null;

  @Column("varchar", { name: "vip_sub_category", nullable: true, length: 50 })
  vipSubCategory: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("int", { name: "created_at", nullable: true })
  createdAt: number | null;

  @Column("int", { name: "updated_at", nullable: true })
  updatedAt: number | null;
}
