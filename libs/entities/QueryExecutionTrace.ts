import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("query_execution_trace", { schema: "ftn_db_main" })
export class QueryExecutionTrace {
  @PrimaryGeneratedColumn({ type: "bigint", name: "qr_ex_id" })
  qrExId: string;

  @Column("varchar", { name: "controller_path", nullable: true, length: 255 })
  controllerPath: string | null;

  @Column("varchar", {
    name: "controller_function",
    nullable: true,
    length: 100,
  })
  controllerFunction: string | null;

  @Column("int", {
    name: "controller_line",
    nullable: true,
    default: () => "'0'",
  })
  controllerLine: number | null;

  @Column("varchar", { name: "model_path", nullable: true, length: 255 })
  modelPath: string | null;

  @Column("varchar", { name: "model_function", nullable: true, length: 100 })
  modelFunction: string | null;

  @Column("int", { name: "model_line", nullable: true, default: () => "'0'" })
  modelLine: number | null;

  @Column("text", { name: "query_string", nullable: true })
  queryString: string | null;

  @Column("float", {
    name: "execution_time",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  executionTime: number | null;
}
