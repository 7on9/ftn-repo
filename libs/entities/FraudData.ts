import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fraud_data", { schema: "ftn_db_main" })
export class FraudData {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id", default: () => "'0'" })
  orderId: number;

  @Column("varchar", { name: "fraud_class", nullable: true, length: 255 })
  fraudClass: string | null;

  @Column("varchar", { name: "fraud_style", nullable: true, length: 255 })
  fraudStyle: string | null;

  @Column("varchar", { name: "reason", nullable: true, length: 255 })
  reason: string | null;

  @Column("varchar", { name: "o_country", nullable: true, length: 255 })
  oCountry: string | null;

  @Column("varchar", { name: "countries_show", nullable: true, length: 255 })
  countriesShow: string | null;

  @Column("int", { name: "timestamp", nullable: true })
  timestamp: number | null;
}
