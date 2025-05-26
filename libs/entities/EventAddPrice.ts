import { Column, Entity } from "typeorm";

@Entity("event_add_price", { schema: "ftn_db_main" })
export class EventAddPrice {
  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;

  @Column("float", { name: "add_price", precision: 12, default: () => "'0'" })
  addPrice: number;
}
