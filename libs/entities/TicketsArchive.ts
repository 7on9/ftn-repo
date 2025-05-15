import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ticket_event_id", ["ticketEventId"], {})
@Index("seller_id", ["supplierId"], {})
@Index("idx_ticket_event_category", ["ticketEventId", "ticketCategoryId"], {})
@Index("idx_ticket_price_supplier", ["ticketPrice", "supplierId"], {})
@Index("idx_block_row_age_group", ["block", "row", "ageGroup"], {})
@Index("idx_created_at", ["createdAt"], {})
@Index("idx_updated_at", ["updatedAt"], {})
@Entity("tickets_archive", { schema: "ftn_db_main" })
export class TicketsArchive {
  @PrimaryGeneratedColumn({ type: "int", name: "ticket_id", unsigned: true })
  ticketId: number;

  @Column("int", {
    name: "ticket_event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  ticketEventId: number | null;

  @Column("int", {
    name: "ticket_category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  ticketCategoryId: number | null;

  @Column("float", {
    name: "ticket_price",
    nullable: true,
    unsigned: true,
    precision: 7,
    scale: 2,
    default: () => "'0.00'",
  })
  ticketPrice: number | null;

  @Column("tinyint", { name: "sold_out", default: () => "'000'" })
  soldOut: number;

  @Column("smallint", {
    name: "max_tickets",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  maxTickets: number | null;

  @Column("int", { name: "eticket", default: () => "'0'" })
  eticket: number;

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

  @Column("int", { name: "supplier_id", unsigned: true, default: () => "'0'" })
  supplierId: number;

  @Column("float", {
    name: "supplier_ticket_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  supplierTicketPrice: number | null;

  @Column("int", {
    name: "request",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  request: number | null;

  @Column("float", {
    name: "fake_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  fakePrice: number | null;

  @Column("enum", {
    name: "split_type",
    nullable: true,
    enum: [
      "ANY",
      "PAIRS",
      "DONT_LEAVE_ONE",
      "DONT_LEAVE_ONE_ALLOW_SINGLES",
      "DONT_LEAVE_ONE_NO_SINGLES",
      "MUST_BUY_ALL",
      "UP_3TOGETHER",
      "UP_4TOGETHER",
      "UP_5TOGETHER",
      "UP_6TOGETHER",
      "UP_7TOGETHER",
      "UP_8TOGETHER",
      "UP_9TOGETHER",
      "UP_10TOGETHER",
      "SINGLE_TICKET",
      "DONT_LEAVE_ONE_NO_SINGLES_PAIRS",
      "DONT_LEAVE_ONE_ALLOW_SINGLES_PAIRS",
      "DONT_LEAVE_ONE_NO_SINGLES_TOGETHER",
      "DONT_LEAVE_ONE_ALLOW_SINGLES_TOGETHER",
    ],
  })
  splitType:
    | "ANY"
    | "PAIRS"
    | "DONT_LEAVE_ONE"
    | "DONT_LEAVE_ONE_ALLOW_SINGLES"
    | "DONT_LEAVE_ONE_NO_SINGLES"
    | "MUST_BUY_ALL"
    | "UP_3TOGETHER"
    | "UP_4TOGETHER"
    | "UP_5TOGETHER"
    | "UP_6TOGETHER"
    | "UP_7TOGETHER"
    | "UP_8TOGETHER"
    | "UP_9TOGETHER"
    | "UP_10TOGETHER"
    | "SINGLE_TICKET"
    | "DONT_LEAVE_ONE_NO_SINGLES_PAIRS"
    | "DONT_LEAVE_ONE_ALLOW_SINGLES_PAIRS"
    | "DONT_LEAVE_ONE_NO_SINGLES_TOGETHER"
    | "DONT_LEAVE_ONE_ALLOW_SINGLES_TOGETHER"
    | null;

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

  @Column("int", { name: "admin_approve_id", nullable: true })
  adminApproveId: number | null;

  @Column("int", { name: "approve_time", nullable: true })
  approveTime: number | null;

  @Column("tinyint", {
    name: "approve_comment",
    nullable: true,
    default: () => "'0'",
  })
  approveComment: number | null;

  @Column("tinyint", {
    name: "activated",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  activated: boolean | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  deleted: boolean | null;

  @Column("int", { name: "deleted_at", nullable: true })
  deletedAt: number | null;

  @Column("int", { name: "active_change_at", nullable: true })
  activeChangeAt: number | null;

  @Column("int", { name: "created_at", nullable: true })
  createdAt: number | null;

  @Column("int", { name: "updated_at", nullable: true })
  updatedAt: number | null;

  @Column("varchar", { name: "fans_side", nullable: true, length: 254 })
  fansSide: string | null;

  @Column("int", { name: "vip_package", nullable: true })
  vipPackage: number | null;

  @Column("varchar", { name: "vip_sub_category", nullable: true, length: 50 })
  vipSubCategory: string | null;
}
