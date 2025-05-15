import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_reference_from_get", { schema: "ftn_db_main" })
export class PaymentReferenceFromGet {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "reference", nullable: true, length: 256 })
  reference: string | null;
}
