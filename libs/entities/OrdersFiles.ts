import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("passport", ["passport"], {})
@Index("chargeback", ["chargeback"], {})
@Entity("orders_files", { schema: "ftn_db_main" })
export class OrdersFiles {
  @PrimaryGeneratedColumn({ type: "int", name: "file_id", unsigned: true })
  fileId: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("varchar", { name: "file", nullable: true, length: 255 })
  file: string | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", {
    name: "uploaded",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  uploaded: number | null;

  @Column("tinyint", { name: "passport", width: 1, default: () => "'0'" })
  passport: boolean;

  @Column("tinyint", { name: "chargeback", width: 1, default: () => "'0'" })
  chargeback: boolean;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("tinyint", {
    name: "bank_transfer_confirm",
    width: 1,
    default: () => "'0'",
  })
  bankTransferConfirm: boolean;

  @Column("tinyint", {
    name: "payment_evidence",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  paymentEvidence: boolean | null;
}
