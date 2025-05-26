import { Column, Entity } from "typeorm";

@Entity("events_sold_out_categories", { schema: "ftn_db_main" })
export class EventsSoldOutCategories {
  @Column("int", { primary: true, name: "event_id" })
  eventId: number;

  @Column("varchar", { name: "event_name", nullable: true, length: 255 })
  eventName: string | null;

  @Column("int", { name: "event_date", default: () => "'0'" })
  eventDate: number;

  @Column("int", { name: "max_categories", default: () => "'0'" })
  maxCategories: number;

  @Column("int", { name: "available_categories", default: () => "'0'" })
  availableCategories: number;

  @Column("int", { name: "email_sent", default: () => "'0'" })
  emailSent: number;

  @Column("double", {
    name: "available_percentage",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  availablePercentage: number;
}
