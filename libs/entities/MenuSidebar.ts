import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("menu_sidebar", { schema: "ftn_db_main" })
export class MenuSidebar {
  @PrimaryGeneratedColumn({ type: "int", name: "menu_id", unsigned: true })
  menuId: number;

  @Column("smallint", {
    name: "menu_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuTitle: number;

  @Column("smallint", {
    name: "menu_item_1_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuItem_1Title: number;

  @Column("smallint", {
    name: "menu_item_2_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuItem_2Title: number;

  @Column("smallint", {
    name: "menu_item_3_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuItem_3Title: number;

  @Column("smallint", {
    name: "menu_item_4_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuItem_4Title: number;

  @Column("smallint", {
    name: "menu_item_5_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuItem_5Title: number;

  @Column("smallint", {
    name: "menu_item_6_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuItem_6Title: number;

  @Column("smallint", {
    name: "menu_item_7_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuItem_7Title: number;

  @Column("smallint", {
    name: "menu_item_8_title",
    unsigned: true,
    default: () => "'0'",
  })
  menuItem_8Title: number;

  @Column("tinyint", {
    name: "menu_priority",
    unsigned: true,
    default: () => "'0'",
  })
  menuPriority: number;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;
}
