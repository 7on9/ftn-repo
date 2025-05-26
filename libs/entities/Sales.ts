import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sales", { schema: "ftn_db_main" })
export class Sales {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("enum", { name: "sale_type", nullable: true, enum: ["ALL", "GROUP"] })
  saleType: "ALL" | "GROUP" | null;

  @Column("varchar", { name: "sale_code", nullable: true, length: 255 })
  saleCode: string | null;

  @Column("varchar", { name: "sale_information", nullable: true, length: 500 })
  saleInformation: string | null;
}
