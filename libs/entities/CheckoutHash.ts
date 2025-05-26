import { Column, Entity } from "typeorm";

@Entity("checkout_hash", { schema: "ftn_db_main" })
export class CheckoutHash {
  @Column("varchar", { primary: true, name: "hash_id", length: 40 })
  hashId: string;

  @Column("int", { name: "ticket_id", default: () => "'0'" })
  ticketId: number;

  @Column("tinyint", { name: "quantity", default: () => "'0'" })
  quantity: number;

  @Column("int", { name: "order_id", nullable: true })
  orderId: number | null;

  @Column("varchar", { name: "paypal_token", nullable: true, length: 40 })
  paypalToken: string | null;
}
