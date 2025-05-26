import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("supplier_id", ["supplierId"], {})
@Index("is_read", ["isRead"], {})
@Entity("supplier_messages", { schema: "ftn_db_main" })
export class SupplierMessages {
  @PrimaryGeneratedColumn({ type: "int", name: "supplier_message_id" })
  supplierMessageId: number;

  @Column("int", { name: "supplier_id" })
  supplierId: number;

  @Column("text", { name: "content" })
  content: string;

  @Column("tinyint", { name: "is_read", width: 1, default: () => "'0'" })
  isRead: boolean;

  @Column("int", { name: "admin_id" })
  adminId: number;

  @Column("int", { name: "sent_at", nullable: true })
  sentAt: number | null;
}
