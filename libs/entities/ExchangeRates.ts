import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("exchange_rates", { schema: "ftn_db_main" })
export class ExchangeRates {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("float", {
    name: "GBP",
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  gbp: number;

  @Column("float", {
    name: "EUR",
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  eur: number;

  @Column("float", {
    name: "USD",
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  usd: number;
}
