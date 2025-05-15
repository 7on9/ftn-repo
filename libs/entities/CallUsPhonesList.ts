import { Column, Entity, Index } from "typeorm";

@Index("phone_id", ["phoneId"], {})
@Entity("call_us_phones_list", { schema: "ftn_db_main" })
export class CallUsPhonesList {
  @Column("int", { name: "phone_id", default: () => "'0'" })
  phoneId: number;

  @Column("tinyint", { name: "type", nullable: true, default: () => "'1'" })
  type: number | null;

  @Column("text", { name: "phone_country", nullable: true })
  phoneCountry: string | null;

  @Column("text", { name: "phone_area_code", nullable: true })
  phoneAreaCode: string | null;

  @Column("text", { name: "phone_number", nullable: true })
  phoneNumber: string | null;

  @Column("text", { name: "phone_country_logo", nullable: true })
  phoneCountryLogo: string | null;

  @Column("varchar", { name: "office_name", nullable: true, length: 255 })
  officeName: string | null;

  @Column("varchar", { name: "office_address", nullable: true, length: 512 })
  officeAddress: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 125 })
  email: string | null;

  @Column("varchar", { name: "domain", nullable: true, length: 125 })
  domain: string | null;
}
