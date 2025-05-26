import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("merchant_notifications", { schema: "ftn_db_main" })
export class MerchantNotifications {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "order_id", nullable: true, length: 255 })
  orderId: string | null;

  @Column("varchar", { name: "merchant", nullable: true, length: 255 })
  merchant: string | null;

  @Column("varchar", { name: "location_server", nullable: true, length: 255 })
  locationServer: string | null;

  @Column("varchar", {
    name: "location_notification",
    nullable: true,
    length: 255,
  })
  locationNotification: string | null;
}
