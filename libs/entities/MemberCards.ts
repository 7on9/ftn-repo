import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("active", ["active"], {})
@Index("type", ["type"], {})
@Entity("member_cards", { schema: "ftn_db_main" })
export class MemberCards {
  @PrimaryGeneratedColumn({ type: "int", name: "member_card_id" })
  memberCardId: number;

  @Column("int", { name: "supplier", default: () => "'0'" })
  supplier: number;

  @Column("int", { name: "date_added", default: () => "'0'" })
  dateAdded: number;

  @Column("varchar", { name: "last_name", nullable: true, length: 64 })
  lastName: string | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 64 })
  firstName: string | null;

  @Column("int", { name: "dob", unsigned: true, default: () => "'0'" })
  dob: number;

  @Column("varchar", { name: "member_number", nullable: true, length: 32 })
  memberNumber: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 128 })
  email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 64 })
  password: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 128 })
  address: string | null;

  @Column("varchar", { name: "digits", nullable: true, length: 32 })
  digits: string | null;

  @Column("tinyint", { name: "active", width: 1, default: () => "'0'" })
  active: boolean;

  @Column("varchar", { name: "type", nullable: true, length: 16 })
  type: string | null;

  @Column("float", {
    name: "price",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number;

  @Column("varchar", { name: "currency", nullable: true, length: 3 })
  currency: string | null;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;
}
