import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("menu_navigation_old_db", { schema: "ftn_db_main" })
export class MenuNavigationOldDb {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "menu_id", unsigned: true })
  menuId: number;

  @Column("varchar", { name: "menu_parent", nullable: true, length: 255 })
  menuParent: string | null;

  @Column("varchar", { name: "menu_title", nullable: true, length: 255 })
  menuTitle: string | null;

  @Column("smallint", { name: "item_1", nullable: true, unsigned: true })
  item_1: number | null;

  @Column("smallint", { name: "item_2", nullable: true, unsigned: true })
  item_2: number | null;

  @Column("smallint", { name: "item_3", nullable: true, unsigned: true })
  item_3: number | null;

  @Column("smallint", { name: "item_4", nullable: true, unsigned: true })
  item_4: number | null;

  @Column("smallint", { name: "item_5", nullable: true, unsigned: true })
  item_5: number | null;

  @Column("smallint", { name: "item_6", nullable: true, unsigned: true })
  item_6: number | null;

  @Column("smallint", { name: "item_7", nullable: true, unsigned: true })
  item_7: number | null;

  @Column("smallint", { name: "item_8", nullable: true, unsigned: true })
  item_8: number | null;

  @Column("smallint", { name: "item_9", nullable: true, unsigned: true })
  item_9: number | null;

  @Column("smallint", { name: "item_10", nullable: true, unsigned: true })
  item_10: number | null;

  @Column("tinyint", { name: "menu_priority", nullable: true, unsigned: true })
  menuPriority: number | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;

  @Column("varchar", { name: "grouped_data", nullable: true, length: 255 })
  groupedData: string | null;
}
