import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("menu_navigation", { schema: "ftn_db_main" })
export class MenuNavigation {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "menu_id", unsigned: true })
  menuId: number;

  @Column("varchar", { name: "menu_parent", nullable: true, length: 255 })
  menuParent: string | null;

  @Column("varchar", { name: "menu_title", nullable: true, length: 255 })
  menuTitle: string | null;

  @Column("varchar", { name: "menu_title_es", nullable: true, length: 255 })
  menuTitleEs: string | null;

  @Column("varchar", { name: "menu_title_dk", nullable: true, length: 255 })
  menuTitleDk: string | null;

  @Column("varchar", { name: "menu_title_se", nullable: true, length: 255 })
  menuTitleSe: string | null;

  @Column("varchar", { name: "menu_title_fi", nullable: true, length: 255 })
  menuTitleFi: string | null;

  @Column("varchar", { name: "menu_title_nl", nullable: true, length: 255 })
  menuTitleNl: string | null;

  @Column("varchar", { name: "menu_title_it", nullable: true, length: 255 })
  menuTitleIt: string | null;

  @Column("varchar", { name: "menu_title_de", nullable: true, length: 255 })
  menuTitleDe: string | null;

  @Column("varchar", { name: "menu_title_fr", nullable: true, length: 255 })
  menuTitleFr: string | null;

  @Column("smallint", { name: "item_1", unsigned: true, default: () => "'0'" })
  item_1: number;

  @Column("smallint", { name: "item_2", unsigned: true, default: () => "'0'" })
  item_2: number;

  @Column("smallint", { name: "item_3", unsigned: true, default: () => "'0'" })
  item_3: number;

  @Column("smallint", { name: "item_4", unsigned: true, default: () => "'0'" })
  item_4: number;

  @Column("smallint", { name: "item_5", unsigned: true, default: () => "'0'" })
  item_5: number;

  @Column("smallint", { name: "item_6", unsigned: true, default: () => "'0'" })
  item_6: number;

  @Column("smallint", { name: "item_7", unsigned: true, default: () => "'0'" })
  item_7: number;

  @Column("smallint", { name: "item_8", unsigned: true, default: () => "'0'" })
  item_8: number;

  @Column("smallint", { name: "item_9", unsigned: true, default: () => "'0'" })
  item_9: number;

  @Column("smallint", { name: "item_10", unsigned: true, default: () => "'0'" })
  item_10: number;

  @Column("tinyint", {
    name: "menu_priority",
    unsigned: true,
    default: () => "'0'",
  })
  menuPriority: number;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;

  @Column("varchar", { name: "grouped_data", nullable: true, length: 255 })
  groupedData: string | null;

  @Column("varchar", { name: "grouped_data_es", nullable: true, length: 255 })
  groupedDataEs: string | null;

  @Column("varchar", { name: "grouped_data_dk", nullable: true, length: 255 })
  groupedDataDk: string | null;

  @Column("varchar", { name: "grouped_data_se", nullable: true, length: 255 })
  groupedDataSe: string | null;

  @Column("varchar", { name: "grouped_data_fi", nullable: true, length: 255 })
  groupedDataFi: string | null;

  @Column("varchar", { name: "grouped_data_nl", nullable: true, length: 255 })
  groupedDataNl: string | null;

  @Column("varchar", { name: "grouped_data_it", nullable: true, length: 255 })
  groupedDataIt: string | null;

  @Column("varchar", { name: "grouped_data_de", nullable: true, length: 255 })
  groupedDataDe: string | null;

  @Column("varchar", { name: "grouped_data_fr", nullable: true, length: 255 })
  groupedDataFr: string | null;
}
