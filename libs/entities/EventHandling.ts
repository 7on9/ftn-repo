import { Column, Entity, Index } from "typeorm";

@Index("event_id", ["eventId"], { unique: true })
@Entity("event_handling", { schema: "ftn_db_main" })
export class EventHandling {
  @Column("int", { name: "event_id", unsigned: true })
  eventId: number;

  @Column("float", {
    name: "0",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  0: number;

  @Column("float", {
    name: "2",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  2: number;

  @Column("float", {
    name: "4",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  4: number;

  @Column("float", {
    name: "10",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  10: number;

  @Column("float", {
    name: "15",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  15: number;

  @Column("float", {
    name: "20",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  20: number;
}
