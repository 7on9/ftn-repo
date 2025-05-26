import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["email"], { unique: true })
@Entity("emails_verify", { schema: "ftn_db_main" })
export class EmailsVerify {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "email",
    nullable: true,
    unique: true,
    length: 128,
  })
  email: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 32 })
  status: string | null;
}
