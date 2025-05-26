import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("wtn_sidebar", { schema: "ftn_db_main" })
export class WtnSidebar {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 15 })
  name: string | null;

  @Column("varchar", { name: "parent_type", nullable: true, length: 10 })
  parentType: string | null;

  @Column("int", { name: "parent_item", nullable: true, default: () => "'0'" })
  parentItem: number | null;

  @Column("varchar", { name: "item_link_type", nullable: true, length: 10 })
  itemLinkType: string | null;

  @Column("int", { name: "item_link_id", nullable: true, default: () => "'0'" })
  itemLinkId: number | null;

  @Column("int", { name: "sorter", nullable: true, default: () => "'0'" })
  sorter: number | null;
}
