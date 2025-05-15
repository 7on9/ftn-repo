import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("unique_index", ["email", "saleId"], { unique: true })
@Entity("sales_purchases", { schema: "ftn_db_main" })
export class SalesPurchases {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("int", { name: "sale_id", nullable: true, default: () => "'0'" })
  saleId: number | null;

  @Column("int", { name: "date_used", nullable: true })
  dateUsed: number | null;
}
