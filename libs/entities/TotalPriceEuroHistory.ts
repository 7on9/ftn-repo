import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id_indx", ["orderId"], {})
@Index("date_indx", ["date"], {})
@Entity("total_price_euro_history", { schema: "ftn_db_main" })
export class TotalPriceEuroHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "from", nullable: true, length: 128 })
  from: string | null;

  @Column("varchar", { name: "to", nullable: true, length: 128 })
  to: string | null;

  @Column("varchar", { name: "file", nullable: true, length: 128 })
  file: string | null;

  @Column("varchar", { name: "reference", nullable: true, length: 128 })
  reference: string | null;

  @Column("int", {
    name: "date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  date: number | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;
}
