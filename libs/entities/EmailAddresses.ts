import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_addresses", { schema: "ftn_db_main" })
export class EmailAddresses {
  @PrimaryGeneratedColumn({ type: "int", name: "email_id" })
  emailId: number;

  @Column("varchar", { name: "email_address", nullable: true, length: 255 })
  emailAddress: string | null;

  @Column("varchar", { name: "email_password", nullable: true, length: 255 })
  emailPassword: string | null;

  @Column("varchar", { name: "email_link", nullable: true, length: 254 })
  emailLink: string | null;

  @Column("varchar", { name: "source", nullable: true, length: 32 })
  source: string | null;

  @Column("int", { name: "admin_id", unsigned: true, default: () => "'0'" })
  adminId: number;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("int", { name: "ftl_id", unsigned: true, default: () => "'0'" })
  ftlId: number;

  @Column("varchar", { name: "first_name", nullable: true, length: 64 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 64 })
  lastName: string | null;

  @Column("varchar", { name: "more_information", nullable: true, length: 256 })
  moreInformation: string | null;

  @Column("varchar", { name: "username", nullable: true, length: 32 })
  username: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 16 })
  status: string | null;

  @Column("int", { name: "team", default: () => "'0'" })
  team: number;

  @Column("varchar", { name: "ticket_type", nullable: true, length: 16 })
  ticketType: string | null;
}
