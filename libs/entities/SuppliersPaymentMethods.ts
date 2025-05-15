import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("supplier_id", ["supplierId"], {})
@Entity("suppliers_payment_methods", { schema: "ftn_db_main" })
export class SuppliersPaymentMethods {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "payment_method_id",
    unsigned: true,
  })
  paymentMethodId: number;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("tinyint", { name: "card_type", nullable: true })
  cardType: number | null;

  @Column("int", {
    name: "date_added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  dateAdded: number | null;

  @Column("varchar", { name: "pm_token", nullable: true, length: 128 })
  pmToken: string | null;

  @Column("varchar", { name: "first_six", nullable: true, length: 10 })
  firstSix: string | null;

  @Column("varchar", { name: "last_four", nullable: true, length: 10 })
  lastFour: string | null;

  @Column("tinyint", {
    name: "is_enabled",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isEnabled: boolean | null;

  @Column("varchar", { name: "country", nullable: true, length: 64 })
  country: string | null;

  @Column("varchar", { name: "state", nullable: true, length: 254 })
  state: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 64 })
  city: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 128 })
  address: string | null;

  @Column("varchar", { name: "postal_code", nullable: true, length: 32 })
  postalCode: string | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;

  @Column("varchar", { name: "email_address", nullable: true, length: 128 })
  emailAddress: string | null;

  @Column("varchar", { name: "name_on_card", nullable: true, length: 254 })
  nameOnCard: string | null;
}
