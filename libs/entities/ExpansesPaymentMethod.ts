import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("payment_method", ["paymentMethod", "paymentType"], {})
@Entity("expanses_payment_method", { schema: "ftn_db_main" })
export class ExpansesPaymentMethod {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "payment_method_id",
    unsigned: true,
  })
  paymentMethodId: number;

  @Column("varchar", { name: "payment_method", nullable: true, length: 128 })
  paymentMethod: string | null;

  @Column("varchar", { name: "payment_type", nullable: true, length: 64 })
  paymentType: string | null;
}
