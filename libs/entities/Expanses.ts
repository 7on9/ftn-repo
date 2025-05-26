import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("expanses_type", ["expansesType"], {})
@Entity("expanses", { schema: "ftn_db_main" })
export class Expanses {
  @PrimaryGeneratedColumn({ type: "int", name: "expanses_id", unsigned: true })
  expansesId: number;

  @Column("int", {
    name: "user_inserted",
    unsigned: true,
    default: () => "'0'",
  })
  userInserted: number;

  @Column("varchar", { name: "purpose", nullable: true, length: 255 })
  purpose: string | null;

  @Column("float", {
    name: "amount",
    unsigned: true,
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: number;

  @Column("varchar", { name: "currency", nullable: true, length: 16 })
  currency: string | null;

  @Column("float", {
    name: "orig_amount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  origAmount: number;

  @Column("varchar", { name: "orig_currency", nullable: true, length: 16 })
  origCurrency: string | null;

  @Column("int", { name: "date_pay", unsigned: true, default: () => "'0'" })
  datePay: number;

  @Column("text", { name: "payment_method", nullable: true })
  paymentMethod: string | null;

  @Column("int", {
    name: "expanses_type",
    unsigned: true,
    default: () => "'0'",
  })
  expansesType: number;

  @Column("int", {
    name: "expanses_sub_type",
    unsigned: true,
    default: () => "'0'",
  })
  expansesSubType: number;

  @Column("int", {
    name: "date_inserted",
    unsigned: true,
    default: () => "'0'",
  })
  dateInserted: number;

  @Column("tinyint", { name: "split", width: 1, default: () => "'0'" })
  split: boolean;

  @Column("int", { name: "split_src", unsigned: true, default: () => "'0'" })
  splitSrc: number;
}
