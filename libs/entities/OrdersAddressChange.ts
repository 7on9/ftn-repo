import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("added", ["added"], {})
@Index("order_id", ["orderId"], {})
@Index("approved", ["approved"], {})
@Entity("orders_address_change", { schema: "ftn_db_main" })
export class OrdersAddressChange {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "order_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  orderId: number | null;

  @Column("int", {
    name: "added",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  added: number | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 64 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 64 })
  lastName: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 64 })
  type: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 64 })
  address: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 64 })
  city: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 64 })
  country: string | null;

  @Column("varchar", { name: "postal_code", nullable: true, length: 64 })
  postalCode: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 40 })
  phone: string | null;

  @Column("varchar", { name: "mobile", nullable: true, length: 40 })
  mobile: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 128 })
  company: string | null;

  @Column("varchar", { name: "hotel_name", nullable: true, length: 128 })
  hotelName: string | null;

  @Column("varchar", {
    name: "hotel_reservation_name",
    nullable: true,
    length: 128,
  })
  hotelReservationName: string | null;

  @Column("int", {
    name: "hotel_arriving_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  hotelArrivingDate: number | null;

  @Column("int", {
    name: "hotel_leaving_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  hotelLeavingDate: number | null;

  @Column("tinyint", { name: "approved", width: 1, default: () => "'0'" })
  approved: boolean;

  @Column("tinyint", { name: "standby", width: 1, default: () => "'0'" })
  standby: boolean;

  @Column("varchar", { name: "host_name", nullable: true, length: 255 })
  hostName: string | null;

  @Column("varchar", { name: "host_phone", nullable: true, length: 40 })
  hostPhone: string | null;

  @Column("varchar", {
    name: "office_contact_name",
    nullable: true,
    length: 255,
  })
  officeContactName: string | null;

  @Column("varchar", {
    name: "office_contact_phone",
    nullable: true,
    length: 40,
  })
  officeContactPhone: string | null;

  @Column("varchar", { name: "hotel_phone", nullable: true, length: 40 })
  hotelPhone: string | null;

  @Column("varchar", { name: "dorms_name", nullable: true, length: 255 })
  dormsName: string | null;

  @Column("varchar", { name: "remarks", nullable: true, length: 255 })
  remarks: string | null;
}
