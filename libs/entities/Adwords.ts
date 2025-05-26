import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adword_date", ["adwordsDate"], {})
@Index("adwords_type", ["adwordsType"], {})
@Entity("adwords", { schema: "ftn_db_main" })
export class Adwords {
  @PrimaryGeneratedColumn({ type: "int", name: "adwords_id", unsigned: true })
  adwordsId: number;

  @Column("int", { name: "adwords_date", unsigned: true, default: () => "'0'" })
  adwordsDate: number;

  @Column("float", {
    name: "adwords_amount",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  adwordsAmount: number;

  @Column("varchar", { name: "adwords_rate", nullable: true, length: 5 })
  adwordsRate: string | null;

  @Column("varchar", { name: "adwords_type", nullable: true, length: 16 })
  adwordsType: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
