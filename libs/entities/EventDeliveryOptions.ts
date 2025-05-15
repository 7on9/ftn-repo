import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("event_delivery_options", { schema: "ftn_db_main" })
export class EventDeliveryOptions {
  @PrimaryGeneratedColumn({ type: "int", name: "edo_id" })
  edoId: number;

  @Column("int", { name: "edo_event", unsigned: true, default: () => "'0'" })
  edoEvent: number;

  @Column("int", { name: "edo_option", unsigned: true, default: () => "'0'" })
  edoOption: number;
}
