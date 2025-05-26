import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_id", ["eventId"], {})
@Index("added", ["added"], {})
@Index("admin_id", ["adminId"], {})
@Entity("we_call_you", { schema: "ftn_db_main" })
export class WeCallYou {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "event_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  eventId: number | null;

  @Column("varchar", { name: "phone", nullable: true, length: 128 })
  phone: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 45 })
  ip: string | null;

  @Column("int", {
    name: "added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  added: number | null;

  @Column("tinyint", { name: "done", width: 1, default: () => "'0'" })
  done: boolean;

  @Column("tinyint", { name: "sms_sent", width: 1, default: () => "'0'" })
  smsSent: boolean;

  @Column("int", {
    name: "admin_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number | null;

  @Column("int", { name: "when_done", nullable: true, default: () => "'0'" })
  whenDone: number | null;
}
