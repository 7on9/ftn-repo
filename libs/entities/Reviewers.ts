import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reviewers", { schema: "ftn_db_main" })
export class Reviewers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "first_name", nullable: true, length: 15 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 25 })
  lastName: string | null;

  @Column("varchar", { name: "username", nullable: true, length: 50 })
  username: string | null;

  @Column("varchar", { name: "email_address", nullable: true, length: 150 })
  emailAddress: string | null;

  @Column("varchar", { name: "email_password", nullable: true, length: 20 })
  emailPassword: string | null;

  @Column("varchar", { name: "more_information", nullable: true, length: 255 })
  moreInformation: string | null;

  @Column("tinyint", { name: "done", width: 1, default: () => "'0'" })
  done: boolean;

  @Column("varchar", { name: "website", nullable: true, length: 15 })
  website: string | null;
}
