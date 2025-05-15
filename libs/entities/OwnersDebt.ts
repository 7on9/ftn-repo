import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("owners_debt", { schema: "ftn_db_main" })
export class OwnersDebt {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("tinyint", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("tinyint", {
    name: "owner_name",
    unsigned: true,
    default: () => "'0'",
  })
  ownerName: number;

  @Column("float", {
    name: "amount",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 8 })
  currency: string | null;

  @Column("int", {
    name: "date_paid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  datePaid: number | null;

  @Column("int", {
    name: "date_added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateAdded: number | null;

  @Column("tinyint", { name: "paid", unsigned: true, default: () => "'0'" })
  paid: number;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "paid_extra", nullable: true, length: 255 })
  paidExtra: string | null;
}
