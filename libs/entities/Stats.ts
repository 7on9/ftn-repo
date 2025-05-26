import { Column, Entity } from "typeorm";

@Entity("stats", { schema: "ftn_db_main" })
export class Stats {
  @Column("varchar", { name: "key", nullable: true, length: 25 })
  key: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 45 })
  ip: string | null;

  @Column("int", {
    name: "time",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  time: number | null;

  @Column("int", {
    name: "val",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  val: number | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
