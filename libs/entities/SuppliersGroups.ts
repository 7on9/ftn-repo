import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers_groups", { schema: "ftn_db_main" })
export class SuppliersGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "group_id", unsigned: true })
  groupId: number;

  @Column("varchar", { name: "group_name", nullable: true, length: 64 })
  groupName: string | null;

  @Column("text", { name: "selections", nullable: true })
  selections: string | null;
}
