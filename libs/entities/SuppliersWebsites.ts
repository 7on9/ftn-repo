import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers_websites", { schema: "ftn_db_main" })
export class SuppliersWebsites {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "website_name", nullable: true, length: 100 })
  websiteName: string | null;

  @Column("int", { name: "supplier_id", nullable: true, default: () => "'0'" })
  supplierId: number | null;
}
