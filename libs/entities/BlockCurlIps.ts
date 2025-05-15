import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("blockCurlIps", { schema: "ftn_db_main" })
export class BlockCurlIps {
  @PrimaryGeneratedColumn({ type: "int", name: "blockCurlIpsID" })
  blockCurlIpsId: number;

  @Column("varchar", { name: "blockIP", nullable: true, length: 255 })
  blockIp: string | null;

  @Column("int", { name: "added", default: () => "'0'" })
  added: number;
}
