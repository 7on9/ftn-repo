import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("currency_code", ["currencyCode"], {})
@Entity("currencies", { schema: "ftn_db_main" })
export class Currencies {
  @PrimaryGeneratedColumn({
    type: "tinyint",
    name: "currency_id",
    unsigned: true,
  })
  currencyId: number;

  @Column("varchar", { name: "currency_name", nullable: true, length: 32 })
  currencyName: string | null;

  @Column("char", { name: "currency_code", nullable: true, length: 10 })
  currencyCode: string | null;

  @Column("char", { name: "symbol_left", nullable: true, length: 10 })
  symbolLeft: string | null;

  @Column("char", { name: "symbol_right", nullable: true, length: 10 })
  symbolRight: string | null;

  @Column("float", {
    name: "value",
    unsigned: true,
    precision: 9,
    scale: 4,
    default: () => "'0.0000'",
  })
  value: number;

  @Column("int", { name: "last_updated", default: () => "'0'" })
  lastUpdated: number;
}
