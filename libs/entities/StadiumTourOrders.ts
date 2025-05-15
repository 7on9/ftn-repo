import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stadium_tour_orders", { schema: "ftn_db_main" })
export class StadiumTourOrders {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "stadium_tour_id",
    unsigned: true,
  })
  stadiumTourId: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "arriving_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  arrivingDate: number | null;

  @Column("int", {
    name: "venue_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  venueId: number | null;

  @Column("varchar", { name: "stadium_currency", nullable: true, length: 10 })
  stadiumCurrency: string | null;

  @Column("smallint", {
    name: "child_ticket_quantity",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  childTicketQuantity: number | null;

  @Column("float", {
    name: "child_ticket_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  childTicketPrice: number | null;

  @Column("smallint", {
    name: "adult_ticket_quantity",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adultTicketQuantity: number | null;

  @Column("float", {
    name: "adult_ticket_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  adultTicketPrice: number | null;

  @Column("float", {
    name: "handling_price",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  handlingPrice: number | null;

  @Column("float", {
    name: "exchange_rate",
    nullable: true,
    unsigned: true,
    precision: 9,
    scale: 8,
    default: () => "'0.00000000'",
  })
  exchangeRate: number | null;

  @Column("int", {
    name: "purchase_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  purchaseDate: number | null;
}
