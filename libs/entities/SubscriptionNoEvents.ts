import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("subscription_type_name", ["subscriptionTypeName"], {})
@Entity("subscription_no_events", { schema: "ftn_db_main" })
export class SubscriptionNoEvents {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "subscription_id",
    unsigned: true,
  })
  subscriptionId: number;

  @Column("varchar", {
    name: "subscription_type_name",
    nullable: true,
    length: 64,
  })
  subscriptionTypeName: string | null;

  @Column("varchar", {
    name: "subscription_type_id",
    nullable: true,
    length: 32,
  })
  subscriptionTypeId: string | null;

  @Column("varchar", { name: "subscription_name", nullable: true, length: 255 })
  subscriptionName: string | null;

  @Column("varchar", {
    name: "subscription_email",
    nullable: true,
    length: 254,
  })
  subscriptionEmail: string | null;

  @Column("tinyint", {
    name: "email_sent",
    unsigned: true,
    default: () => "'0'",
  })
  emailSent: number;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;

  @Column("int", {
    name: "subscription_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  subscriptionDate: number | null;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("int", { name: "sent_date", nullable: true })
  sentDate: number | null;
}
