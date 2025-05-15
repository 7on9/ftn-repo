import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], {})
@Entity("orders_people", { schema: "ftn_db_main" })
export class OrdersPeople {
  @PrimaryGeneratedColumn({ type: "int", name: "people_id", unsigned: true })
  peopleId: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "dob", nullable: true, length: 15 })
  dob: string | null;

  @Column("varchar", { name: "nation", nullable: true, length: 255 })
  nation: string | null;

  @Column("varchar", { name: "fiscal", nullable: true, length: 255 })
  fiscal: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("varchar", { name: "sex", nullable: true, length: 10 })
  sex: string | null;

  @Column("varchar", { name: "borncity", nullable: true, length: 255 })
  borncity: string | null;

  @Column("varchar", { name: "provincia", nullable: true, length: 255 })
  provincia: string | null;
}
