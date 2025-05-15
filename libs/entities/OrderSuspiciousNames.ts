import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_suspicious_names", { schema: "ftn_db_main" })
export class OrderSuspiciousNames {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("text", { name: "restrictions", nullable: true })
  restrictions: string | null;
}
