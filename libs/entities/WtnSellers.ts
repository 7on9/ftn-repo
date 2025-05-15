import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("wtn_sellers", { schema: "ftn_db_main" })
export class WtnSellers {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("varchar", { name: "supplier_user", nullable: true, length: 64 })
  supplierUser: string | null;

  @Column("varchar", { name: "supplier_password", nullable: true, length: 32 })
  supplierPassword: string | null;

  @Column("varchar", {
    name: "supplier_password_raw",
    nullable: true,
    length: 128,
  })
  supplierPasswordRaw: string | null;
}
