import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customer_segmentation", { schema: "ftn_db_main" })
export class CustomerSegmentation {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "customer_segmentation_id" })
  customerSegmentationId: number;

  @Column("varchar", {
    name: "customer_segmentation_name",
    nullable: true,
    length: 45,
  })
  customerSegmentationName: string | null;

  @Column("varchar", {
    name: "customer_segmentation_from",
    nullable: true,
    length: 45,
  })
  customerSegmentationFrom: string | null;

  @Column("varchar", {
    name: "customer_segmentation_to",
    nullable: true,
    length: 45,
  })
  customerSegmentationTo: string | null;
}
