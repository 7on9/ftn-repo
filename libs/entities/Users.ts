import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_email_2", ["userEmail"], { unique: true })
@Index("user_email", ["userEmail"], {})
@Entity("users", { schema: "ftn_db_main" })
export class Users {
  @PrimaryGeneratedColumn({
    type: "mediumint",
    name: "user_id",
    unsigned: true,
  })
  userId: number;

  @Column("varchar", {
    name: "user_email",
    nullable: true,
    unique: true,
    length: 255,
  })
  userEmail: string | null;

  @Column("varchar", { name: "user_password", nullable: true, length: 255 })
  userPassword: string | null;

  @Column("varchar", { name: "user_first_name", nullable: true, length: 128 })
  userFirstName: string | null;

  @Column("varchar", { name: "user_last_name", nullable: true, length: 128 })
  userLastName: string | null;

  @Column("int", {
    name: "user_created",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  userCreated: number | null;

  @Column("int", {
    name: "user_last_login",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  userLastLogin: number | null;
}
