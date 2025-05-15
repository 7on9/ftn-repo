import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("testimonials", { schema: "ftn_db_main" })
export class Testimonials {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "testimonial_id",
    unsigned: true,
  })
  testimonialId: number;

  @Column("int", {
    name: "testi_order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  testiOrderId: number | null;

  @Column("varchar", { name: "testi_full_name", nullable: true, length: 100 })
  testiFullName: string | null;

  @Column("varchar", { name: "testi_title", nullable: true, length: 254 })
  testiTitle: string | null;

  @Column("text", { name: "testi_body", nullable: true })
  testiBody: string | null;

  @Column("int", {
    name: "testi_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  testiDate: number | null;

  @Column("varchar", { name: "testi_facebook", nullable: true, length: 254 })
  testiFacebook: string | null;

  @Column("tinyint", {
    name: "confirmed",
    unsigned: true,
    default: () => "'0'",
  })
  confirmed: number;

  @Column("tinyint", { name: "manual", unsigned: true, default: () => "'0'" })
  manual: number;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
