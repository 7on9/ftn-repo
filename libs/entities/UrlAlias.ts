import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("url_path", ["urlPath"], {})
@Index("type", ["type"], {})
@Entity("url_alias", { schema: "ftn_db_main" })
export class UrlAlias {
  @PrimaryGeneratedColumn({
    type: "mediumint",
    name: "url_alias_id",
    unsigned: true,
  })
  urlAliasId: number;

  @Column("varchar", { name: "url_type", nullable: true, length: 255 })
  urlType: string | null;

  @Column("varchar", { name: "type_parameter_id", nullable: true, length: 128 })
  typeParameterId: string | null;

  @Column("varchar", { name: "url_path", nullable: true, length: 255 })
  urlPath: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;
}
