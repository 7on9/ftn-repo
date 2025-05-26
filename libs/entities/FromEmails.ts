import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["email"], {})
@Index("priority", ["priority"], {})
@Entity("from_emails", { schema: "ftn_db_main" })
export class FromEmails {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", nullable: true, length: 128 })
  email: string | null;

  @Column("int", { name: "priority", unsigned: true, default: () => "'0'" })
  priority: number;

  @Column("varchar", { name: "from_access", nullable: true, length: 255 })
  fromAccess: string | null;
}
