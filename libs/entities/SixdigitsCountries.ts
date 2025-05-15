import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sixdigits_countries", { schema: "ftn_db_main" })
export class SixdigitsCountries {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "six_digits", nullable: true })
  sixDigits: number | null;

  @Column("varchar", { name: "country", nullable: true, length: 128 })
  country: string | null;

  @Column("tinyint", { name: "is_europe", nullable: true })
  isEurope: number | null;
}
