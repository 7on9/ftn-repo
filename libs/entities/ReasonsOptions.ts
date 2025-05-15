import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reasons_options", { schema: "ftn_db_main" })
export class ReasonsOptions {
  @PrimaryGeneratedColumn({ type: "int", name: "reasonID" })
  reasonId: number;

  @Column("varchar", { name: "for_reason", nullable: true, length: 255 })
  forReason: string | null;

  @Column("text", { name: "reason_text", nullable: true })
  reasonText: string | null;

  @Column("text", { name: "Instructions", nullable: true })
  instructions: string | null;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'1'" })
  active: number | null;
}
