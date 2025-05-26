import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers_teams", { schema: "ftn_db_main" })
export class SuppliersTeams {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "supplier_id", nullable: true })
  supplierId: number | null;

  @Column("int", { name: "team_id", nullable: true })
  teamId: number | null;
}
