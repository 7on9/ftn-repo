import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("optionMerchant", { schema: "ftn_db_main" })
export class OptionMerchant {
  @PrimaryGeneratedColumn({ type: "int", name: "optionMerchantID" })
  optionMerchantId: number;

  @Column("varchar", { name: "value", nullable: true, length: 255 })
  value: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 255 })
  link: string | null;

  @Column("varchar", { name: "shortName", nullable: true, length: 30 })
  shortName: string | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;
}
