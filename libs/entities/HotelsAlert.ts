import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("hotels_alert", { schema: "ftn_db_main" })
export class HotelsAlert {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "hotel_name", nullable: true, length: 255 })
  hotelName: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;
}
