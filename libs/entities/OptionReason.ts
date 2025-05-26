import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("optionReason", { schema: "ftn_db_main" })
export class OptionReason {
  @PrimaryGeneratedColumn({ type: "int", name: "optionReasonID" })
  optionReasonId: number;

  @Column("varchar", { name: "value", nullable: true, length: 255 })
  value: string | null;

  @Column("int", { name: "priority", nullable: true, default: () => "'0'" })
  priority: number | null;

  @Column("varchar", { name: "reason_for", nullable: true, length: 255 })
  reasonFor: string | null;
}
