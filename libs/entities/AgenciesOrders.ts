import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("agencies_orders", { schema: "ftn_db_main" })
export class AgenciesOrders {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "agency_id" })
  agencyId: number;

  @Column("int", { name: "order_id" })
  orderId: number;

  @Column("varchar", {
    name: "customer_first_name",
    nullable: true,
    length: 255,
  })
  customerFirstName: string | null;

  @Column("varchar", {
    name: "customer_last_name",
    nullable: true,
    length: 255,
  })
  customerLastName: string | null;

  @Column("varchar", { name: "customer_email", nullable: true, length: 128 })
  customerEmail: string | null;

  @Column("varchar", { name: "customer_phone", nullable: true, length: 128 })
  customerPhone: string | null;

  @Column("varchar", { name: "order_status", length: 64 })
  orderStatus: string;

  @Column("int", { name: "updated_at", default: () => "'0'" })
  updatedAt: number;

  @Column("int", { name: "created_at", default: () => "'0'" })
  createdAt: number;
}
