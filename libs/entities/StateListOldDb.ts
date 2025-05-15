import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("state_list_old_db", { schema: "ftn_db_main" })
export class StateListOldDb {
  @PrimaryGeneratedColumn({ type: "int", name: "state_id", unsigned: true })
  stateId: number;

  @Column("varchar", { name: "state_name", nullable: true, length: 255 })
  stateName: string | null;

  @Column("varchar", { name: "ISO", nullable: true, length: 255 })
  iso: string | null;
}
