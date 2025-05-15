import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fixed_costs", { schema: "ftn_db_main" })
export class FixedCosts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("varchar", { name: "currency", nullable: true, length: 3 })
  currency: string | null;

  @Column("varchar", { name: "payment", nullable: true, length: 10 })
  payment: string | null;

  @Column("text", { name: "extra", nullable: true })
  extra: string | null;
}
