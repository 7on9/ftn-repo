import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("by_user", ["byUser"], {})
@Entity("orders_tags", { schema: "ftn_db_main" })
export class OrdersTags {
  @PrimaryGeneratedColumn({ type: "int", name: "orderTagsID" })
  orderTagsId: number;

  @Column("varchar", { name: "value", nullable: true, length: 50 })
  value: string | null;

  @Column("varchar", { name: "key", nullable: true, length: 50 })
  key: string | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Column("int", { name: "active", nullable: true, default: () => "'1'" })
  active: number | null;

  @Column("tinyint", { name: "by_user", width: 1, default: () => "'0'" })
  byUser: boolean;

  @Column("varchar", { name: "admin_role", nullable: true, length: 100 })
  adminRole: string | null;
}
