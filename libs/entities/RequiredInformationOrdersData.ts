import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], { unique: true })
@Index("id", ["id"], {})
@Entity("required_information_orders_data", { schema: "ftn_db_main" })
export class RequiredInformationOrdersData {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "added_at", nullable: true, default: () => "'0'" })
  addedAt: number | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unique: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("longtext", { name: "data", nullable: true })
  data: string | null;

  @Column("varchar", { name: "fullname", nullable: true, length: 2500 })
  fullname: string | null;
}
