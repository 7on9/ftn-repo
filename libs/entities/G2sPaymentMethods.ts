import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("g2s_payment_methods", { schema: "ftn_db_main" })
export class G2sPaymentMethods {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "payment_method", nullable: true, length: 512 })
  paymentMethod: string | null;

  @Column("varchar", { name: "parameter", nullable: true, length: 64 })
  parameter: string | null;

  @Column("text", { name: "country", nullable: true })
  country: string | null;

  @Column("text", { name: "currencies", nullable: true })
  currencies: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 64 })
  image: string | null;
}
