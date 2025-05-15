import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("expanses_date", ["expansesDate", "expansesCurrency"], {})
@Entity("new_expanses", { schema: "ftn_db_main" })
export class NewExpanses {
  @PrimaryGeneratedColumn({ type: "int", name: "expanses_id", unsigned: true })
  expansesId: number;

  @Column("int", {
    name: "expanses_date",
    unsigned: true,
    default: () => "'0'",
  })
  expansesDate: number;

  @Column("float", {
    name: "expanses_amount",
    unsigned: true,
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  expansesAmount: number;

  @Column("varchar", { name: "expanses_currency", nullable: true, length: 6 })
  expansesCurrency: string | null;

  @Column("varchar", { name: "expanses_type", nullable: true, length: 32 })
  expansesType: string | null;
}
