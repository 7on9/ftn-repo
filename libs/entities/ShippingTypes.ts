import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shippingTypes", { schema: "ftn_db_main" })
export class ShippingTypes {
  @PrimaryGeneratedColumn({ type: "int", name: "shippingTypeID" })
  shippingTypeId: number;

  @Column("varchar", { name: "key", nullable: true, length: 25 })
  key: string | null;

  @Column("varchar", { name: "view", nullable: true, length: 25 })
  view: string | null;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'1'" })
  active: number | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;
}
