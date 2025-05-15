import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email_address", ["emailAddress"], { unique: true })
@Entity("customers", { schema: "ftn_db_main" })
export class Customers {
  @PrimaryGeneratedColumn({ type: "int", name: "customer_id", unsigned: true })
  customerId: number;

  @Column("varchar", {
    name: "email_address",
    nullable: true,
    unique: true,
    length: 128,
  })
  emailAddress: string | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 128 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 128 })
  lastName: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 40 })
  password: string | null;

  @Column("int", { name: "created", unsigned: true, default: () => "'0'" })
  created: number;

  @Column("int", { name: "updated", nullable: true, unsigned: true })
  updated: number | null;
}
