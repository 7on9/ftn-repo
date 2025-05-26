import { Column, Entity, Index } from "typeorm";

@Index("user_id", ["userId"], {})
@Entity("user_details", { schema: "ftn_db_main" })
export class UserDetails {
  @Column("int", {
    name: "user_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  userId: number | null;

  @Column("varchar", { name: "user_country", nullable: true, length: 255 })
  userCountry: string | null;

  @Column("varchar", { name: "user_city", nullable: true, length: 255 })
  userCity: string | null;

  @Column("varchar", { name: "user_postal_code", nullable: true, length: 32 })
  userPostalCode: string | null;

  @Column("varchar", { name: "user_address", nullable: true, length: 255 })
  userAddress: string | null;

  @Column("varchar", { name: "phone_1", nullable: true, length: 255 })
  phone_1: string | null;

  @Column("varchar", { name: "phone_2", nullable: true, length: 255 })
  phone_2: string | null;
}
