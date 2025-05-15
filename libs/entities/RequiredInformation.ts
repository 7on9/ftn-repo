import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RequiredInformationFields } from "./RequiredInformationFields";

@Index(
  "item_id_item_table_req_info_field_id",
  ["itemId", "itemTable", "reqInfoFieldId"],
  { unique: true }
)
@Index("id", ["id"], {})
@Index("FK_req_info_req_info_types", ["reqInfoFieldId"], {})
@Entity("required_information", { schema: "ftn_db_main" })
export class RequiredInformation {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "item_id", nullable: true, default: () => "'0'" })
  itemId: number | null;

  @Column("enum", {
    name: "item_table",
    nullable: true,
    enum: [
      "event",
      "country",
      "team",
      "city",
      "tournament",
      "venue",
      "mobile_ticket",
    ],
  })
  itemTable:
    | "event"
    | "country"
    | "team"
    | "city"
    | "tournament"
    | "venue"
    | "mobile_ticket"
    | null;

  @Column("int", {
    name: "req_info_field_id",
    nullable: true,
    default: () => "'0'",
  })
  reqInfoFieldId: number | null;

  @Column("tinyint", { name: "active", default: () => "'0'" })
  active: number;

  @Column("tinyint", { name: "needed_for_all", width: 1, default: () => "'0'" })
  neededForAll: boolean;

  @ManyToOne(
    () => RequiredInformationFields,
    (requiredInformationFields) =>
      requiredInformationFields.requiredInformations,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "req_info_field_id", referencedColumnName: "id" }])
  reqInfoField: RequiredInformationFields;
}
