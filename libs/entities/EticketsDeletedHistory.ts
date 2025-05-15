import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_id", ["eventId"], {})
@Index("block", ["block"], {})
@Index("row", ["row"], {})
@Index("seat", ["seat"], {})
@Index("order_id", ["orderId"], {})
@Entity("etickets_deleted_history", { schema: "ftn_db_main" })
export class EticketsDeletedHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "admin", unsigned: true, default: () => "'0'" })
  admin: number;

  @Column("varchar", {
    name: "admin_type",
    comment: "Admin/Supplier",
    length: 10,
    default: () => "'Admin'",
  })
  adminType: string;

  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;

  @Column("varchar", { name: "block", nullable: true, length: 10 })
  block: string | null;

  @Column("varchar", { name: "row", nullable: true, length: 10 })
  row: string | null;

  @Column("varchar", { name: "seat", nullable: true, length: 10 })
  seat: string | null;

  @Column("int", { name: "order_id", unsigned: true, default: () => "'0'" })
  orderId: number;

  @Column("tinyint", { name: "voucher", width: 1, default: () => "'0'" })
  voucher: boolean;

  @Column("varchar", { name: "file", nullable: true, length: 256 })
  file: string | null;

  @Column("tinyint", { name: "downloaded", width: 1, default: () => "'0'" })
  downloaded: boolean;

  @Column("int", { name: "uploaded", unsigned: true, default: () => "'0'" })
  uploaded: number;

  @Column("tinyint", { name: "is_voucher", default: () => "'0'" })
  isVoucher: number;

  @Column("int", { name: "supplier_id", default: () => "'0'" })
  supplierId: number;

  @Column("tinyint", { name: "is_mobile", default: () => "'0'" })
  isMobile: number;

  @Column("tinyint", { name: "is_pdf_mobile", default: () => "'0'" })
  isPdfMobile: number;

  @Column("tinyint", { name: "is_pkpass", default: () => "'0'" })
  isPkpass: number;

  @Column("int", { name: "deleted_time", default: () => "'0'" })
  deletedTime: number;
}
