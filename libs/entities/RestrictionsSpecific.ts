import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("restrictions_specific", { schema: "ftn_db_main" })
export class RestrictionsSpecific {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "added_at", nullable: true, default: () => "'0'" })
  addedAt: number | null;

  @Column("int", { name: "order_id", nullable: true, default: () => "'0'" })
  orderId: number | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;

  @Column("varchar", { name: "email_address", nullable: true, length: 32 })
  emailAddress: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 64 })
  address: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 32 })
  city: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 32 })
  phone: string | null;

  @Column("varchar", { name: "mobile", nullable: true, length: 32 })
  mobile: string | null;

  @Column("varchar", { name: "restrict_type", nullable: true, length: 32 })
  restrictType: string | null;

  @Column("text", { name: "restrict_values", nullable: true })
  restrictValues: string | null;

  @Column("varchar", { name: "blocking_reason", nullable: true, length: 256 })
  blockingReason: string | null;
}
