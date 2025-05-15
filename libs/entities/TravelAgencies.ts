import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("travel_agencies", { schema: "ftn_db_main" })
export class TravelAgencies {
  @PrimaryGeneratedColumn({ type: "int", name: "travel_agencies_id" })
  travelAgenciesId: number;

  @Column("varchar", { name: "first_name", length: 255 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 255 })
  lastName: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "phone", length: 255 })
  phone: string;

  @Column("varchar", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 255 })
  company: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 255 })
  website: string | null;

  @Column("int", { name: "create_date", nullable: true })
  createDate: number | null;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Column("int", { name: "admin_id", nullable: true })
  adminId: number | null;

  @Column("int", { name: "update_date", nullable: true })
  updateDate: number | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "discount_percent", nullable: true })
  discountPercent: number | null;
}
