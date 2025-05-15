import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bank_date", ["bankDate"], {})
@Entity("money_from_merchants", { schema: "ftn_db_main" })
export class MoneyFromMerchants {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "merchant_name", nullable: true, length: 50 })
  merchantName: string | null;

  @Column("float", {
    name: "amount",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: number;

  @Column("float", {
    name: "recieved",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  recieved: number;

  @Column("int", { name: "bank_date", unsigned: true, default: () => "'0'" })
  bankDate: number;

  @Column("float", {
    name: "expected",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  expected: number;

  @Column("float", {
    name: "rolling_reserve",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  rollingReserve: number;

  @Column("float", {
    name: "bank_wire_transfer",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  bankWireTransfer: number;

  @Column("float", {
    name: "trans_fee",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  transFee: number;

  @Column("float", {
    name: "fee",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  fee: number;

  @Column("varchar", { name: "currency", nullable: true, length: 3 })
  currency: string | null;

  @Column("int", { name: "admin", default: () => "'0'" })
  admin: number;

  @Column("int", { name: "date", default: () => "'0'" })
  date: number;

  @Column("int", { name: "start_date", default: () => "'0'" })
  startDate: number;

  @Column("int", { name: "end_date", default: () => "'0'" })
  endDate: number;

  @Column("varchar", { name: "file", nullable: true, length: 255 })
  file: string | null;

  @Column("tinyint", { name: "payed", width: 1, default: () => "'0'" })
  payed: boolean;
}
