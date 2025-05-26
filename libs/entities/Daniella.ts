import { Column, Entity } from "typeorm";

@Entity("daniella", { schema: "ftn_db_main" })
export class Daniella {
  @Column("tinyint", { name: "event_name", default: () => "'0'" })
  eventName: number;

  @Column("tinyint", { name: "event_date", default: () => "'0'" })
  eventDate: number;

  @Column("tinyint", { name: "quantity", default: () => "'0'" })
  quantity: number;

  @Column("tinyint", { name: "category_name", default: () => "'0'" })
  categoryName: number;

  @Column("tinyint", { name: "block", default: () => "'0'" })
  block: number;

  @Column("tinyint", { name: "row", default: () => "'0'" })
  row: number;

  @Column("tinyint", { name: "seat_from", default: () => "'0'" })
  seatFrom: number;

  @Column("tinyint", { name: "seat_to", default: () => "'0'" })
  seatTo: number;

  @Column("tinyint", { name: "type", default: () => "'0'" })
  type: number;

  @Column("tinyint", { name: "price", default: () => "'0'" })
  price: number;

  @Column("tinyint", { name: "currency_code", default: () => "'0'" })
  currencyCode: number;

  @Column("tinyint", { name: "venue_name", default: () => "'0'" })
  venueName: number;

  @Column("tinyint", { name: "city_name", default: () => "'0'" })
  cityName: number;
}
