import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("state_list", { schema: "ftn_db_main" })
export class StateList {
  @PrimaryGeneratedColumn({ type: "int", name: "state_id", unsigned: true })
  stateId: number;

  @Column("varchar", { name: "state_name", nullable: true, length: 255 })
  stateName: string | null;

  @Column("varchar", { name: "state_name_es", nullable: true, length: 255 })
  stateNameEs: string | null;

  @Column("varchar", { name: "state_name_dk", nullable: true, length: 255 })
  stateNameDk: string | null;

  @Column("varchar", { name: "state_name_se", nullable: true, length: 255 })
  stateNameSe: string | null;

  @Column("varchar", { name: "state_name_fi", nullable: true, length: 255 })
  stateNameFi: string | null;

  @Column("varchar", { name: "state_name_nl", nullable: true, length: 255 })
  stateNameNl: string | null;

  @Column("varchar", { name: "state_name_it", nullable: true, length: 255 })
  stateNameIt: string | null;

  @Column("varchar", { name: "state_name_de", nullable: true, length: 255 })
  stateNameDe: string | null;

  @Column("varchar", { name: "state_name_fr", nullable: true, length: 255 })
  stateNameFr: string | null;

  @Column("varchar", { name: "ISO", nullable: true, length: 255 })
  iso: string | null;
}
