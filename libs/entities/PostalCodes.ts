import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("postal_code", ["postalCode"], {})
@Index("address", ["address"], {})
@Entity("postal_codes", { schema: "ftn_db_main" })
export class PostalCodes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "postal_code", nullable: true, length: 16 })
  postalCode: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 128 })
  address: string | null;
}
