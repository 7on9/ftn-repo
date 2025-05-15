import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("euro_list", { schema: "ftn_db_main" })
export class EuroList {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "email", nullable: true, length: 128 })
  email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 32 })
  password: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 3 })
  title: string | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 32 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 32 })
  lastName: string | null;

  @Column("int", { name: "birthday", unsigned: true, default: () => "'0'" })
  birthday: number;

  @Column("int", { name: "birthmonth", unsigned: true, default: () => "'0'" })
  birthmonth: number;

  @Column("int", { name: "birthyear", unsigned: true, default: () => "'0'" })
  birthyear: number;

  @Column("varchar", { name: "nationality", nullable: true, length: 32 })
  nationality: string | null;

  @Column("int", { name: "passport", unsigned: true, default: () => "'0'" })
  passport: number;

  @Column("varchar", { name: "address", nullable: true, length: 128 })
  address: string | null;

  @Column("int", { name: "zip", unsigned: true, default: () => "'0'" })
  zip: number;

  @Column("varchar", { name: "city", nullable: true, length: 32 })
  city: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 32 })
  country: string | null;

  @Column("int", { name: "prefix", unsigned: true, default: () => "'0'" })
  prefix: number;

  @Column("int", { name: "mobile", unsigned: true, default: () => "'0'" })
  mobile: number;

  @Column("tinyint", { name: "sent", width: 1, default: () => "'0'" })
  sent: boolean;
}
