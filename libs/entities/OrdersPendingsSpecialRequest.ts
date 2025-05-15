import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("orders_pendings_special_request", { schema: "ftn_db_main" })
export class OrdersPendingsSpecialRequest {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "special_request_id",
    unsigned: true,
  })
  specialRequestId: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("text", { name: "wating_for", nullable: true })
  watingFor: string | null;

  @Column("text", { name: "special_request", nullable: true })
  specialRequest: string | null;

  @Column("int", { name: "update_date", nullable: true })
  updateDate: number | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
