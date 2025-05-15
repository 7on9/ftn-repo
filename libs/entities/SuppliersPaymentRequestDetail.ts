import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_payment_request_detail_purchase_type", ["purchaseType"], {})
@Index("idx_payment_request_detail_purchase_id", ["purchaseId"], {})
@Index(
  "idx_payment_request_detail_purchase_and_type",
  ["purchaseType", "purchaseId"],
  {}
)
@Entity("suppliers_payment_request_detail", { schema: "ftn_db_main" })
export class SuppliersPaymentRequestDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "suppliers_payment_request_id",
    nullable: true,
    unsigned: true,
  })
  suppliersPaymentRequestId: number | null;

  @Column("int", {
    name: "purchase_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  purchaseId: number | null;

  @Column("varchar", {
    name: "purchase_type",
    nullable: true,
    length: 10,
    default: () => "'regular'",
  })
  purchaseType: string | null;

  @Column("int", { name: "is_cancel", nullable: true, default: () => "'0'" })
  isCancel: number | null;
}
