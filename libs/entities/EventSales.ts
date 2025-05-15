import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("event_sales", { schema: "ftn_db_main" })
export class EventSales {
  @PrimaryGeneratedColumn({ type: "int", name: "event_id", unsigned: true })
  eventId: number;

  @Column("int", { name: "sale_count", nullable: true, unsigned: true })
  saleCount: number | null;
}
