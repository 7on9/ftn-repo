import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers_tracks", { schema: "ftn_db_main" })
export class SuppliersTracks {
  @PrimaryGeneratedColumn({ type: "int", name: "track_id", unsigned: true })
  trackId: number;

  @Column("varchar", { name: "supplier_email", length: 255 })
  supplierEmail: string;

  @Column("varchar", { name: "ip_address", length: 50 })
  ipAddress: string;

  @Column("varchar", { name: "action", length: 255 })
  action: string;

  @Column("int", { name: "timestamp", nullable: true })
  timestamp: number | null;
}
