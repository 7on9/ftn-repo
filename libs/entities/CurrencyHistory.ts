import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["date"], { unique: true })
@Entity("currency_history", { schema: "ftn_db_main" })
export class CurrencyHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "date",
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  date: number;

  @Column("float", {
    name: "GBP",
    unsigned: true,
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  gbp: number;

  @Column("float", {
    name: "EUR",
    unsigned: true,
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  eur: number;

  @Column("float", {
    name: "USD",
    unsigned: true,
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  usd: number;

  @Column("float", {
    name: "ILS",
    unsigned: true,
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  ils: number;

  @Column("float", {
    name: "PLN",
    unsigned: true,
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  pln: number;

  @Column("float", {
    name: "BRL",
    unsigned: true,
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  brl: number;

  @Column("float", {
    name: "AED",
    unsigned: true,
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  aed: number;

  @Column("float", {
    name: "AUD",
    unsigned: true,
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  aud: number;
}
