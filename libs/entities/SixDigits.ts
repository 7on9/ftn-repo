import { Column, Entity, Index } from "typeorm";

@Index("six_digits", ["sixDigits"], { unique: true })
@Entity("six_digits", { schema: "ftn_db_main" })
export class SixDigits {
  @Column("int", { name: "six_digits", unsigned: true })
  sixDigits: number;

  @Column("varchar", { name: "country", nullable: true, length: 64 })
  country: string | null;
}
