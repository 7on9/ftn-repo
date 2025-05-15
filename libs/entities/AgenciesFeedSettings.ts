import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_type_id", ["type", "resourceId"], {})
@Index("idx_agency", ["agencyId"], {})
@Entity("agencies_feed_settings", { schema: "ftn_db_main" })
export class AgenciesFeedSettings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "agency_id" })
  agencyId: number;

  @Column("int", { name: "resource_id" })
  resourceId: number;

  @Column("varchar", { name: "type", length: 45 })
  type: string;

  @Column("int", { name: "created_at", unsigned: true })
  createdAt: number;
}
