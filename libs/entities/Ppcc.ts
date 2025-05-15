import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ppcc", { schema: "ftn_db_main" })
export class Ppcc {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "cc_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  ccId: number | null;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("float", {
    name: "value",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  value: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 5 })
  currency: string | null;

  @Column("text", { name: "extra", nullable: true })
  extra: string | null;

  @Column("int", {
    name: "date_added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateAdded: number | null;
}
