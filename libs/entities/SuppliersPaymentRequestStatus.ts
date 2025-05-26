import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers_payment_request_status", { schema: "ftn_db_main" })
export class SuppliersPaymentRequestStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "status_id" })
  statusId: number;

  @Column("varchar", { name: "text", nullable: true, length: 255 })
  text: string | null;
}
