import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("gbgsportstravel", ["affiliate"], {})
@Index("admin_id", ["adminId"], {})
@Entity("agencies", { schema: "ftn_db_main" })
export class Agencies {
  @PrimaryGeneratedColumn({ type: "int", name: "agency_id", unsigned: true })
  agencyId: number;

  @Column("tinyint", { name: "affiliate", width: 1, default: () => "'0'" })
  affiliate: boolean;

  @Column("varchar", { name: "company_name", nullable: true, length: 128 })
  companyName: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 254 })
  website: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 128 })
  country: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 128 })
  city: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 128 })
  email: string | null;

  @Column("varchar", { name: "phone_number", nullable: true, length: 128 })
  phoneNumber: string | null;

  @Column("varchar", { name: "contact_person", nullable: true, length: 128 })
  contactPerson: string | null;

  @Column("varchar", { name: "purpose", nullable: true, length: 32 })
  purpose: string | null;

  @Column("float", {
    name: "partner_bf_discount",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  partnerBfDiscount: number | null;

  @Column("text", { name: "extra_field", nullable: true })
  extraField: string | null;

  @Column("int", { name: "supplier_id", unsigned: true, default: () => "'0'" })
  supplierId: number;

  @Column("int", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("varchar", { name: "source", nullable: true, length: 16 })
  source: string | null;

  @Column("tinyint", { name: "status", nullable: true, default: () => "'1'" })
  status: number | null;

  @Column("varchar", { name: "secret_key", nullable: true, length: 50 })
  secretKey: string | null;

  @Column("varchar", { name: "safe_ips", nullable: true, length: 512 })
  safeIps: string | null;
}
