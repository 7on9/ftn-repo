import { Column, Entity, Index } from "typeorm";

@Index("event_id", ["teamId"], { unique: true })
@Entity("team_handling", { schema: "ftn_db_main" })
export class TeamHandling {
  @Column("int", { name: "team_id", unsigned: true })
  teamId: number;

  @Column("float", {
    name: "0",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  0: number | null;

  @Column("float", {
    name: "2",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  2: number | null;

  @Column("float", {
    name: "4",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  4: number | null;

  @Column("float", {
    name: "10",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  10: number | null;

  @Column("float", {
    name: "15",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  15: number | null;

  @Column("float", {
    name: "20",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  20: number | null;
}
