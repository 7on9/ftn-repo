import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("affiliate_program", { schema: "ftn_db_main" })
export class AffiliateProgram {
  @PrimaryGeneratedColumn({ type: "int", name: "affiliate_id" })
  affiliateId: number;

  @Column("varchar", { name: "first_name", length: 255 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 255 })
  lastName: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "phone", length: 255 })
  phone: string;

  @Column("varchar", { name: "company", nullable: true, length: 255 })
  company: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 255 })
  website: string | null;

  @Column("int", { name: "create_date", nullable: true })
  createDate: number | null;

  @Column("varchar", { name: "monthly_visitors", nullable: true, length: 255 })
  monthlyVisitors: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "country", length: 255 })
  country: string;
}
