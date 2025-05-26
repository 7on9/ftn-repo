import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("spam_email", { schema: "ftn_db_main" })
export class SpamEmail {
  @PrimaryGeneratedColumn({ type: "bigint", name: "spam_id", unsigned: true })
  spamId: string;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;
}
