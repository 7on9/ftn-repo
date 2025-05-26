import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_id", ["eventId"], {})
@Index("affiliate_id", ["affiliateId"], {})
@Index("category_id", ["categoryId"], {})
@Index("coupon_id", ["couponId"], {})
@Index("voucher_id", ["voucherId"], {})
@Index("ip_address", ["ipAddress"], {})
@Index("category", ["category"], {})
@Index("first_name", ["firstName"], {})
@Index("last_name", ["lastName"], {})
@Index("phone_number", ["phoneNumber"], {})
@Index("mobile_number", ["mobileNumber"], {})
@Index("email_address", ["emailAddress"], {})
@Index("date_purchased", ["datePurchased"], {})
@Index("order_status", ["orderStatus"], {})
@Index("event_name", ["eventName", "eventDate", "quantity"], {})
@Index("is_double", ["isDouble"], {})
@Index("event_purchase_date", ["datePurchased", "eventDate"], {})
@Index("idx_owner_supplier_id", ["ownerSupplierId"], {})
@Index("idx_address", ["address"], {})
@Index("idx_postal_code", ["postalCode"], {})
@Index("idx_city", ["city"], {})
@Index("idx_shipping_address", ["shippingAddress"], {})
@Index("idx_shipping_city", ["shippingCity"], {})
@Index("idx_order_status_email_address", ["orderStatus", "emailAddress"], {})
@Index(
  "idx_orders_event_status_category",
  ["eventId", "categoryId", "orderStatus"],
  {}
)
@Index("idx_ip_address", ["ipAddress"], {})
@Index("idx_email_address", ["emailAddress"], {})
@Index("idx_phone_number", ["phoneNumber"], {})
@Index("idx_mobile_number", ["mobileNumber"], {})
@Index("idx_address_postal_code", ["address", "postalCode"], {})
@Index(
  "idx_ip_email_phone",
  ["ipAddress", "emailAddress", "phoneNumber", "mobileNumber"],
  {}
)
@Index("idx_address_postal", ["address", "postalCode"], {})
@Index(
  "idx_ip_email_phone_order",
  ["ipAddress", "emailAddress", "phoneNumber", "mobileNumber", "orderId"],
  {}
)
@Index("idx_order_ticket_id", ["orderTicketId"], {})
@Entity("orders", { schema: "ftn_db_main" })
export class Orders {
  @PrimaryGeneratedColumn({ type: "int", name: "order_id", unsigned: true })
  orderId: number;

  @Column("int", {
    name: "date_purchased",
    unsigned: true,
    default: () => "'0'",
  })
  datePurchased: number;

  @Column("int", { name: "event_id", unsigned: true, default: () => "'0'" })
  eventId: number;

  @Column("varchar", { name: "event_name", nullable: true, length: 255 })
  eventName: string | null;

  @Column("int", { name: "event_date", unsigned: true, default: () => "'0'" })
  eventDate: number;

  @Column("varchar", { name: "event_location", nullable: true, length: 255 })
  eventLocation: string | null;

  @Column("int", { name: "category_id", unsigned: true, default: () => "'0'" })
  categoryId: number;

  @Column("varchar", { name: "category", nullable: true, length: 128 })
  category: string | null;

  @Column("varchar", { name: "vip_sub_category", nullable: true, length: 50 })
  vipSubCategory: string | null;

  @Column("varchar", {
    name: "category_description",
    nullable: true,
    length: 1024,
  })
  categoryDescription: string | null;

  @Column("text", { name: "ticket_description", nullable: true })
  ticketDescription: string | null;

  @Column("varchar", { name: "fans_side", nullable: true, length: 255 })
  fansSide: string | null;

  @Column("varchar", { name: "currency", nullable: true, length: 128 })
  currency: string | null;

  @Column("varchar", { name: "user_currency", nullable: true, length: 20 })
  userCurrency: string | null;

  @Column("float", {
    name: "user_rate",
    nullable: true,
    precision: 12,
    scale: 6,
    default: () => "'1.000000'",
  })
  userRate: number | null;

  @Column("tinyint", { name: "quantity", unsigned: true, default: () => "'0'" })
  quantity: number;

  @Column("float", {
    name: "price_regular",
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  priceRegular: number;

  @Column("float", {
    name: "price_handling",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  priceHandling: number | null;

  @Column("varchar", {
    name: "delivery_option_name",
    nullable: true,
    length: 254,
  })
  deliveryOptionName: string | null;

  @Column("float", {
    name: "delivery_option_price",
    nullable: true,
    unsigned: true,
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
  })
  deliveryOptionPrice: number | null;

  @Column("int", { name: "voucher_id", nullable: true, unsigned: true })
  voucherId: number | null;

  @Column("float", {
    name: "voucher_amount",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  voucherAmount: number | null;

  @Column("float", {
    name: "seller_discount_amount",
    nullable: true,
    precision: 16,
    scale: 2,
    default: () => "'0.00'",
  })
  sellerDiscountAmount: number | null;

  @Column("int", {
    name: "buyer_supplier_id",
    nullable: true,
    comment: "to indicate seller bought",
    default: () => "'0'",
  })
  buyerSupplierId: number | null;

  @Column("float", {
    name: "partial_refund",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  partialRefund: number | null;

  @Column("float", {
    name: "total_price_euro",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  totalPriceEuro: number | null;

  @Column("float", {
    name: "special_olympics_fee",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 6,
    default: () => "'0.000000'",
  })
  specialOlympicsFee: number | null;

  @Column("float", {
    name: "paypal_fee",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  paypalFee: number | null;

  @Column("float", {
    name: "new_price_in_eur",
    nullable: true,
    unsigned: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  newPriceInEur: number | null;

  @Column("varchar", { name: "order_status", nullable: true, length: 64 })
  orderStatus: string | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 128 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 128 })
  lastName: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 254 })
  company: string | null;

  @Column("varchar", { name: "email_address", nullable: true, length: 128 })
  emailAddress: string | null;

  @Column("varchar", { name: "phone_number", nullable: true, length: 64 })
  phoneNumber: string | null;

  @Column("varchar", { name: "mobile_number", nullable: true, length: 64 })
  mobileNumber: string | null;

  @Column("varchar", { name: "billing_type", nullable: true, length: 16 })
  billingType: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 64 })
  country: string | null;

  @Column("varchar", { name: "state", nullable: true, length: 254 })
  state: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 64 })
  city: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 128 })
  address: string | null;

  @Column("varchar", { name: "postal_code", nullable: true, length: 32 })
  postalCode: string | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 45 })
  ipAddress: string | null;

  @Column("varchar", { name: "browser_use", nullable: true, length: 254 })
  browserUse: string | null;

  @Column("varchar", {
    name: "shipping_first_name",
    nullable: true,
    length: 254,
  })
  shippingFirstName: string | null;

  @Column("varchar", {
    name: "shipping_last_name",
    nullable: true,
    length: 254,
  })
  shippingLastName: string | null;

  @Column("varchar", { name: "shipping_company", nullable: true, length: 254 })
  shippingCompany: string | null;

  @Column("varchar", { name: "shipping_phone", nullable: true, length: 254 })
  shippingPhone: string | null;

  @Column("varchar", { name: "shipping_mobile", nullable: true, length: 254 })
  shippingMobile: string | null;

  @Column("varchar", { name: "shipping_type", nullable: true, length: 254 })
  shippingType: string | null;

  @Column("varchar", { name: "shipping_country", nullable: true, length: 254 })
  shippingCountry: string | null;

  @Column("varchar", { name: "shipping_state", nullable: true, length: 254 })
  shippingState: string | null;

  @Column("varchar", { name: "shipping_city", nullable: true, length: 254 })
  shippingCity: string | null;

  @Column("varchar", { name: "shipping_address", nullable: true, length: 254 })
  shippingAddress: string | null;

  @Column("varchar", {
    name: "shipping_postal_code",
    nullable: true,
    length: 254,
  })
  shippingPostalCode: string | null;

  @Column("varchar", { name: "hotel_name", nullable: true, length: 254 })
  hotelName: string | null;

  @Column("varchar", {
    name: "hotel_reservation_name",
    nullable: true,
    length: 254,
  })
  hotelReservationName: string | null;

  @Column("int", {
    name: "hotel_arriving_date",
    nullable: true,
    unsigned: true,
  })
  hotelArrivingDate: number | null;

  @Column("int", { name: "hotel_leaving_date", nullable: true, unsigned: true })
  hotelLeavingDate: number | null;

  @Column("varchar", { name: "office_open", nullable: true, length: 10 })
  officeOpen: string | null;

  @Column("varchar", { name: "office_close", nullable: true, length: 10 })
  officeClose: string | null;

  @Column("varchar", { name: "name_on_card", nullable: true, length: 254 })
  nameOnCard: string | null;

  @Column("varchar", { name: "last_four_digits", nullable: true, length: 4 })
  lastFourDigits: string | null;

  @Column("tinyint", {
    name: "secure_order",
    unsigned: true,
    default: () => "'0'",
  })
  secureOrder: number;

  @Column("int", {
    name: "applied_tickets",
    unsigned: true,
    default: () => "'0'",
  })
  appliedTickets: number;

  @Column("tinyint", {
    name: "confirmation_sent",
    unsigned: true,
    default: () => "'0'",
  })
  confirmationSent: number;

  @Column("tinyint", {
    name: "stadium_tour_order",
    unsigned: true,
    default: () => "'0'",
  })
  stadiumTourOrder: number;

  @Column("tinyint", {
    name: "inform_of_local",
    width: 1,
    default: () => "'0'",
  })
  informOfLocal: boolean;

  @Column("tinyint", {
    name: "analytics",
    unsigned: true,
    default: () => "'0'",
  })
  analytics: number;

  @Column("varchar", { name: "tracking_number", nullable: true, length: 128 })
  trackingNumber: string | null;

  @Column("tinyint", {
    name: "follow_order",
    unsigned: true,
    default: () => "'0'",
  })
  followOrder: number;

  @Column("text", { name: "follow_reason", nullable: true })
  followReason: string | null;

  @Column("int", {
    name: "salesman",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  salesman: number | null;

  @Column("tinyint", {
    name: "auto_shipping_mail",
    unsigned: true,
    default: () => "'0'",
  })
  autoShippingMail: number;

  @Column("varchar", { name: "website_source", nullable: true, length: 128 })
  websiteSource: string | null;

  @Column("tinyint", {
    name: "fraud_approved",
    unsigned: true,
    default: () => "'0'",
  })
  fraudApproved: number;

  @Column("tinyint", { name: "low_risk", width: 1, default: () => "'0'" })
  lowRisk: boolean;

  @Column("int", {
    name: "coupon_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  couponId: number | null;

  @Column("tinyint", {
    name: "confirmation_page_ok",
    width: 1,
    default: () => "'0'",
  })
  confirmationPageOk: boolean;

  @Column("tinyint", { name: "ftl", width: 1, default: () => "'0'" })
  ftl: boolean;

  @Column("int", {
    name: "affiliate_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  affiliateId: number | null;

  @Column("varchar", { name: "accept_language", nullable: true, length: 255 })
  acceptLanguage: string | null;

  @Column("tinyint", {
    name: "is_double",
    unsigned: true,
    default: () => "'0'",
  })
  isDouble: number;

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

  @Column("int", { name: "sale_id", nullable: true })
  saleId: number | null;

  @Column("int", { name: "order_ticket_id", nullable: true })
  orderTicketId: number | null;

  @Column("varchar", { name: "payment_method", nullable: true, length: 50 })
  paymentMethod: string | null;

  @Column("int", { name: "owner_supplier_id", nullable: true })
  ownerSupplierId: number | null;

  @Column("int", { name: "travel_agencies_id", nullable: true })
  travelAgenciesId: number | null;

  @Column("int", { name: "listback_requested_at", nullable: true })
  listbackRequestedAt: number | null;

  @Column("int", { name: "listback_approved_at", nullable: true })
  listbackApprovedAt: number | null;
}
