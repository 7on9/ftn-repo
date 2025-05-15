import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("marketing", { schema: "ftn_db_main" })
export class Marketing {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "type" })
  type: number;

  @Column("varchar", { name: "param", length: 10 })
  param: string;

  @Column("int", { name: "is_expensive", default: () => "'0'" })
  isExpensive: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
}
