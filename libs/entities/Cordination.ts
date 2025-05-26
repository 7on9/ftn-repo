import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cordination", { schema: "ftn_db_main" })
export class Cordination {
  @PrimaryGeneratedColumn({ type: "bigint", name: "cord_id", unsigned: true })
  cordId: string;

  @Column("varchar", { name: "cord_ip", nullable: true, length: 16 })
  cordIp: string | null;

  @Column("int", { name: "doc_height", unsigned: true, default: () => "'0'" })
  docHeight: number;

  @Column("int", { name: "doc_width", unsigned: true, default: () => "'0'" })
  docWidth: number;

  @Column("varchar", { name: "cord_page", nullable: true, length: 254 })
  cordPage: string | null;

  @Column("text", { name: "cords", nullable: true })
  cords: string | null;
}
