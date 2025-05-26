import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RequiredInformation } from "./RequiredInformation";
import { RequiredInformationFieldChange } from "./RequiredInformationFieldChange";

@Index("id", ["id"], {})
@Entity("required_information_fields", { schema: "ftn_db_main" })
export class RequiredInformationFields {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "field_name", nullable: true, length: 50 })
  fieldName: string | null;

  @Column("enum", {
    name: "value_type",
    nullable: true,
    enum: [
      "TEXT",
      "BOOLEAN",
      "OPTIONS_FROM_TABLE",
      "OPTIONS_CONSTANT",
      "DATE",
      "RADIOS_CONSTANT",
    ],
  })
  valueType:
    | "TEXT"
    | "BOOLEAN"
    | "OPTIONS_FROM_TABLE"
    | "OPTIONS_CONSTANT"
    | "DATE"
    | "RADIOS_CONSTANT"
    | null;

  @Column("varchar", { name: "validation", nullable: true, length: 100 })
  validation: string | null;

  @Column("varchar", { name: "from_table", nullable: true, length: 50 })
  fromTable: string | null;

  @Column("varchar", { name: "name_column", nullable: true, length: 50 })
  nameColumn: string | null;

  @Column("varchar", { name: "value_column", nullable: true, length: 50 })
  valueColumn: string | null;

  @Column("longtext", { name: "options", nullable: true })
  options: string | null;

  @Column("tinyint", { name: "has_sub_option", width: 1, default: () => "'0'" })
  hasSubOption: boolean;

  @OneToMany(
    () => RequiredInformation,
    (requiredInformation) => requiredInformation.reqInfoField
  )
  requiredInformations: RequiredInformation[];

  @OneToMany(
    () => RequiredInformationFieldChange,
    (requiredInformationFieldChange) =>
      requiredInformationFieldChange.reqInfoField
  )
  requiredInformationFieldChanges: RequiredInformationFieldChange[];

  @OneToMany(
    () => RequiredInformationFieldChange,
    (requiredInformationFieldChange) =>
      requiredInformationFieldChange.reqInfoFieldChild
  )
  requiredInformationFieldChanges2: RequiredInformationFieldChange[];
}
