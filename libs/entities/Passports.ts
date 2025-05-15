import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("passports", { schema: "ftn_db_main" })
export class Passports {
  @PrimaryGeneratedColumn({ type: "int", name: "passport_id" })
  passportId: number;

  @Column("varchar", { name: "passport_name", nullable: true, length: 255 })
  passportName: string | null;

  @Column("varchar", { name: "passport_img", nullable: true, length: 255 })
  passportImg: string | null;
}
