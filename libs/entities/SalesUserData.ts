import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sales_user_data", { schema: "ftn_db_main" })
export class SalesUserData {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("int", { name: "sale_id", nullable: true, default: () => "'0'" })
  saleId: number | null;

  @Column("int", { name: "date_used", nullable: true })
  dateUsed: number | null;

  @Column("datetime", {
    name: "date_added",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateAdded: Date | null;
}
