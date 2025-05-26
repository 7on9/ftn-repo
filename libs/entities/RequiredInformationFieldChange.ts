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
  "req_info_field_id_req_info_field_child_id",
  ["reqInfoFieldId", "reqInfoFieldChildId"],
  { unique: true }
)
@Index("id", ["id"], {})
@Index("FK_req_info_type_change_req_info_types", ["reqInfoFieldId"], {})
@Index("FK_req_info_type_change_req_info_types_2", ["reqInfoFieldChildId"], {})
@Entity("required_information_field_change", { schema: "ftn_db_main" })
export class RequiredInformationFieldChange {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("int", {
    name: "req_info_field_id",
    nullable: true,
    default: () => "'0'",
  })
  reqInfoFieldId: number | null;

  @Column("int", {
    name: "req_info_field_child_id",
    nullable: true,
    default: () => "'0'",
  })
  reqInfoFieldChildId: number | null;

  @Column("varchar", { name: "if_value_equals", nullable: true, length: 50 })
  ifValueEquals: string | null;

  @ManyToOne(
    () => RequiredInformationFields,
    (requiredInformationFields) =>
      requiredInformationFields.requiredInformationFieldChanges,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "req_info_field_id", referencedColumnName: "id" }])
  reqInfoField: RequiredInformationFields;

  @ManyToOne(
    () => RequiredInformationFields,
    (requiredInformationFields) =>
      requiredInformationFields.requiredInformationFieldChanges2,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "req_info_field_child_id", referencedColumnName: "id" }])
  reqInfoFieldChild: RequiredInformationFields;
}
