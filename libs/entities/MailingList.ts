import { Column, Entity, Index } from "typeorm";

@Index("email", ["email"], { unique: true })
@Entity("mailing_list", { schema: "ftn_db_main" })
export class MailingList {
  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "order_id", unsigned: true, default: () => "'0'" })
  orderId: number;

  @Column("int", { name: "date", default: () => "'0'" })
  date: number;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
