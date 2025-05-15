import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("url_link", ["urlLink"], { unique: true })
@Entity("supplier_url_permission", { schema: "ftn_db_main" })
export class SupplierUrlPermission {
  @PrimaryGeneratedColumn({ type: "int", name: "url_id", unsigned: true })
  urlId: number;

  @Column("varchar", { name: "url_link", unique: true, length: 255 })
  urlLink: string;

  @Column("varchar", { name: "need_permission", length: 100 })
  needPermission: string;
}
