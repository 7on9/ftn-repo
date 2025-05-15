import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_tracking", { schema: "ftn_db_main" })
export class UserTracking {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "ab_test_name", nullable: true, length: 50 })
  abTestName: string | null;

  @Column("tinyint", { name: "ab_test_id", default: () => "'0'" })
  abTestId: number;

  @Column("bigint", {
    name: "visit_counter",
    nullable: true,
    default: () => "'0'",
  })
  visitCounter: string | null;

  @Column("bigint", {
    name: "event_page_counter",
    nullable: true,
    default: () => "'0'",
  })
  eventPageCounter: string | null;

  @Column("bigint", {
    name: "click_counter",
    nullable: true,
    default: () => "'0'",
  })
  clickCounter: string | null;
}
