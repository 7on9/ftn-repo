import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("oc_oid", ["ocOid"], {})
@Entity("octable", { schema: "ftn_db_main" })
export class Octable {
  @PrimaryGeneratedColumn({ type: "int", name: "oc_id", unsigned: true })
  ocId: number;

  @Column("int", { name: "oc_oid", unsigned: true, default: () => "'0'" })
  ocOid: number;

  @Column("varchar", { name: "oc_enc", nullable: true, length: 254 })
  ocEnc: string | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;
}
