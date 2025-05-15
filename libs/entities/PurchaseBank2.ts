import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_id", ["eventId", "supplierId", "categoryId"], {})
@Entity("purchase_bank2", { schema: "ftn_db_main" })
export class PurchaseBank2 {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("int", {
    name: "supplier_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  supplierId: number | null;

  @Column("int", {
    name: "category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  categoryId: number | null;

  @Column("int", {
    name: "total_tickets",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  totalTickets: number | null;

  @Column("int", {
    name: "applied_tickets",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  appliedTickets: number | null;
}
