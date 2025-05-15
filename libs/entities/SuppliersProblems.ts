import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("supplier_id", ["supplierId", "orderId"], {})
@Entity("suppliers_problems", { schema: "ftn_db_main" })
export class SuppliersProblems {
  @PrimaryGeneratedColumn({ type: "int", name: "problem_id" })
  problemId: number;

  @Column("int", { name: "supplier_id", nullable: true, default: () => "'0'" })
  supplierId: number | null;

  @Column("int", { name: "order_id", nullable: true, default: () => "'0'" })
  orderId: number | null;

  @Column("int", {
    name: "ftl_problem_id",
    nullable: true,
    default: () => "'0'",
  })
  ftlProblemId: number | null;
}
