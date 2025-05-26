import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers_hooks", { schema: "ftn_db_main" })
export class SuppliersHooks {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "supplier_id" })
  supplierId: number;

  @Column("int", { name: "order_id" })
  orderId: number;

  @Column("text", { name: "request_params", nullable: true })
  requestParams: string | null;

  @Column("int", { name: "response_code", nullable: true })
  responseCode: number | null;

  @Column("text", { name: "response_params", nullable: true })
  responseParams: string | null;

  @Column("tinyint", {
    name: "status",
    nullable: true,
    comment: "0: New, 1: Success, -1: Failed",
    default: () => "'0'",
  })
  status: number | null;

  @Column("int", { name: "retry_count", nullable: true, default: () => "'0'" })
  retryCount: number | null;
}
