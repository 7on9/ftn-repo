import { Column, Entity } from "typeorm";

@Entity("declared_payment", { schema: "ftn_db_main" })
export class DeclaredPayment {
  @Column("int", { primary: true, name: "supplier_id", unsigned: true })
  supplierId: number;

  @Column("varchar", { primary: true, name: "currency", length: 16 })
  currency: string;

  @Column("float", {
    name: "declared",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  declared: number | null;
}
