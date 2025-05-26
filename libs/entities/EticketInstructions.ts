import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id", ["orderId"], { unique: true })
@Entity("eticket_instructions", { schema: "ftn_db_main" })
export class EticketInstructions {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "eticket_instruction_id",
    unsigned: true,
  })
  eticketInstructionId: number;

  @Column("int", { name: "admin_id", nullable: true, unsigned: true })
  adminId: number | null;

  @Column("varchar", {
    name: "admin_type",
    comment: "Admin/Supplier",
    length: 10,
    default: () => "'Admin'",
  })
  adminType: string;

  @Column("int", { name: "event_id", nullable: true, unsigned: true })
  eventId: number | null;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unique: true,
    unsigned: true,
  })
  orderId: number | null;

  @Column("int", { name: "timestamp", nullable: true, unsigned: true })
  timestamp: number | null;

  @Column("varchar", { name: "file", nullable: true, length: 250 })
  file: string | null;
}
