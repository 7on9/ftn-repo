import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], { unique: true })
@Entity("duplicate_phone_number", { schema: "ftn_db_main" })
export class DuplicatePhoneNumber {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id", unique: true, default: () => "'0'" })
  orderId: number;

  @Column("varchar", { name: "message", nullable: true, length: 255 })
  message: string | null;

  @Column("int", { name: "added_date", default: () => "'0'" })
  addedDate: number;

  @Column("int", { name: "resolved_date", default: () => "'0'" })
  resolvedDate: number;
}
