import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("other_prices", { schema: "ftn_db_main" })
export class OtherPrices {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("varchar", { name: "event_name", nullable: true, length: 128 })
  eventName: string | null;

  @Column("int", {
    name: "event_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventDate: number | null;

  @Column("int", {
    name: "category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  categoryId: number | null;

  @Column("varchar", { name: "category_name", nullable: true, length: 64 })
  categoryName: string | null;

  @Column("float", {
    name: "price",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number | null;

  @Column("varchar", { name: "rate", nullable: true, length: 8 })
  rate: string | null;

  @Column("int", {
    name: "tournament_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  tournamentId: number | null;

  @Column("varchar", { name: "tournament_name", nullable: true, length: 128 })
  tournamentName: string | null;

  @Column("int", {
    name: "team1",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  team1: number | null;

  @Column("int", {
    name: "team2",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  team2: number | null;

  @Column("varchar", { name: "team1_name", nullable: true, length: 128 })
  team1Name: string | null;

  @Column("varchar", { name: "team2_name", nullable: true, length: 128 })
  team2Name: string | null;
}
