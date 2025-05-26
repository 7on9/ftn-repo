import { Column, Entity } from "typeorm";

@Entity("action_scores", { schema: "ftn_db_main" })
export class ActionScores {
  @Column("varchar", { primary: true, name: "action_name", length: 100 })
  actionName: string;

  @Column("double", { name: "score", nullable: true, precision: 10, scale: 1 })
  score: number | null;
}
