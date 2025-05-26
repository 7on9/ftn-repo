import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("roles", { schema: "ftn_db_main" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "role_id", unsigned: true })
  roleId: number;

  @Column("varchar", { name: "role_name", nullable: true, length: 128 })
  roleName: string | null;

  @Column("tinyint", {
    name: "general_admin",
    unsigned: true,
    default: () => "'0'",
  })
  generalAdmin: number;

  @Column("tinyint", {
    name: "manage_admin",
    unsigned: true,
    default: () => "'0'",
  })
  manageAdmin: number;

  @Column("int", {
    name: "manage_admin_log",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  manageAdminLog: number | null;

  @Column("tinyint", {
    name: "manage_roles",
    unsigned: true,
    default: () => "'0'",
  })
  manageRoles: number;

  @Column("tinyint", {
    name: "manage_users",
    unsigned: true,
    default: () => "'0'",
  })
  manageUsers: number;

  @Column("tinyint", {
    name: "manage_currencies",
    unsigned: true,
    default: () => "'0'",
  })
  manageCurrencies: number;

  @Column("tinyint", {
    name: "manage_teams",
    unsigned: true,
    default: () => "'0'",
  })
  manageTeams: number;

  @Column("tinyint", {
    name: "manage_tournaments",
    unsigned: true,
    default: () => "'0'",
  })
  manageTournaments: number;

  @Column("tinyint", {
    name: "manage_countries",
    unsigned: true,
    default: () => "'0'",
  })
  manageCountries: number;

  @Column("tinyint", {
    name: "manage_cities",
    unsigned: true,
    default: () => "'0'",
  })
  manageCities: number;

  @Column("tinyint", {
    name: "manage_venues",
    unsigned: true,
    default: () => "'0'",
  })
  manageVenues: number;

  @Column("tinyint", {
    name: "manage_events",
    unsigned: true,
    default: () => "'0'",
  })
  manageEvents: number;

  @Column("tinyint", {
    name: "manage_tickets",
    unsigned: true,
    default: () => "'0'",
  })
  manageTickets: number;

  @Column("tinyint", {
    name: "manage_categories",
    unsigned: true,
    default: () => "'0'",
  })
  manageCategories: number;

  @Column("tinyint", {
    name: "manage_super_promoted",
    unsigned: true,
    default: () => "'0'",
  })
  manageSuperPromoted: number;

  @Column("tinyint", {
    name: "manage_promoted",
    unsigned: true,
    default: () => "'0'",
  })
  managePromoted: number;

  @Column("tinyint", {
    name: "manage_sidebar",
    unsigned: true,
    default: () => "'0'",
  })
  manageSidebar: number;

  @Column("tinyint", {
    name: "manage_navigation",
    unsigned: true,
    default: () => "'0'",
  })
  manageNavigation: number;

  @Column("tinyint", {
    name: "manage_content",
    unsigned: true,
    default: () => "'0'",
  })
  manageContent: number;

  @Column("tinyint", {
    name: "manage_footer",
    unsigned: true,
    default: () => "'0'",
  })
  manageFooter: number;

  @Column("tinyint", {
    name: "manage_popular_search",
    unsigned: true,
    default: () => "'0'",
  })
  managePopularSearch: number;

  @Column("tinyint", {
    name: "manage_orders",
    unsigned: true,
    default: () => "'0'",
  })
  manageOrders: number;

  @Column("tinyint", {
    name: "manage_pattern",
    unsigned: true,
    default: () => "'0'",
  })
  managePattern: number;

  @Column("tinyint", {
    name: "manage_contact",
    unsigned: true,
    default: () => "'0'",
  })
  manageContact: number;

  @Column("tinyint", {
    name: "manage_orders_events",
    unsigned: true,
    default: () => "'0'",
  })
  manageOrdersEvents: number;

  @Column("tinyint", {
    name: "manage_expanses",
    unsigned: true,
    default: () => "'0'",
  })
  manageExpanses: number;

  @Column("tinyint", {
    name: "manage_suppliers",
    unsigned: true,
    default: () => "'0'",
  })
  manageSuppliers: number;

  @Column("tinyint", {
    name: "manage_purchase",
    unsigned: true,
    default: () => "'0'",
  })
  managePurchase: number;

  @Column("tinyint", {
    name: "manage_email_template",
    unsigned: true,
    default: () => "'0'",
  })
  manageEmailTemplate: number;

  @Column("tinyint", {
    name: "manage_comment_template",
    width: 1,
    default: () => "'0'",
  })
  manageCommentTemplate: boolean;

  @Column("tinyint", {
    name: "manage_addresses",
    unsigned: true,
    default: () => "'0'",
  })
  manageAddresses: number;

  @Column("tinyint", {
    name: "manage_emails",
    unsigned: true,
    default: () => "'0'",
  })
  manageEmails: number;

  @Column("tinyint", {
    name: "manage_subscriptions",
    unsigned: true,
    default: () => "'0'",
  })
  manageSubscriptions: number;

  @Column("tinyint", {
    name: "manage_ip_control",
    unsigned: true,
    default: () => "'0'",
  })
  manageIpControl: number;

  @Column("tinyint", {
    name: "manage_seo_links",
    unsigned: true,
    default: () => "'0'",
  })
  manageSeoLinks: number;

  @Column("tinyint", {
    name: "manage_seo_meta",
    width: 1,
    default: () => "'0'",
  })
  manageSeoMeta: boolean;

  @Column("tinyint", {
    name: "manage_sell_your_tickets",
    unsigned: true,
    default: () => "'0'",
  })
  manageSellYourTickets: number;

  @Column("tinyint", {
    name: "manage_stadium_tours",
    unsigned: true,
    default: () => "'0'",
  })
  manageStadiumTours: number;

  @Column("tinyint", {
    name: "manage_cards",
    unsigned: true,
    default: () => "'0'",
  })
  manageCards: number;

  @Column("tinyint", {
    name: "manage_testimonials",
    unsigned: true,
    default: () => "'0'",
  })
  manageTestimonials: number;

  @Column("tinyint", {
    name: "manage_reports",
    unsigned: true,
    default: () => "'0'",
  })
  manageReports: number;

  @Column("tinyint", {
    name: "manage_prices",
    unsigned: true,
    default: () => "'0'",
  })
  managePrices: number;

  @Column("tinyint", {
    name: "manage_gapi",
    unsigned: true,
    default: () => "'0'",
  })
  manageGapi: number;

  @Column("tinyint", {
    name: "manage_sales",
    unsigned: true,
    default: () => "'0'",
  })
  manageSales: number;

  @Column("tinyint", {
    name: "manage_coupons",
    unsigned: true,
    default: () => "'0'",
  })
  manageCoupons: number;

  @Column("tinyint", {
    name: "manage_adwords",
    unsigned: true,
    default: () => "'0'",
  })
  manageAdwords: number;

  @Column("tinyint", {
    name: "manage_dbls",
    unsigned: true,
    default: () => "'0'",
  })
  manageDbls: number;

  @Column("tinyint", {
    name: "manage_chargebacks",
    width: 1,
    default: () => "'0'",
  })
  manageChargebacks: boolean;

  @Column("tinyint", {
    name: "manage_etickets",
    width: 1,
    default: () => "'0'",
  })
  manageEtickets: boolean;

  @Column("tinyint", { name: "manage_todo", width: 1, default: () => "'0'" })
  manageTodo: boolean;

  @Column("tinyint", {
    name: "manage_cs_reports",
    width: 1,
    default: () => "'0'",
  })
  manageCsReports: boolean;

  @Column("tinyint", { name: "manage_sms", width: 1, default: () => "'0'" })
  manageSms: boolean;

  @Column("tinyint", {
    name: "manage_full_delivery",
    width: 1,
    default: () => "'0'",
  })
  manageFullDelivery: boolean;

  @Column("tinyint", {
    name: "manage_owners_debt",
    width: 1,
    default: () => "'0'",
  })
  manageOwnersDebt: boolean;

  @Column("tinyint", { name: "manage_blog", width: 1, default: () => "'0'" })
  manageBlog: boolean;

  @Column("tinyint", {
    name: "manage_language",
    width: 1,
    default: () => "'0'",
  })
  manageLanguage: boolean;

  @Column("tinyint", {
    name: "manage_translation",
    width: 1,
    default: () => "'0'",
  })
  manageTranslation: boolean;

  @Column("int", {
    name: "manage_questions",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  manageQuestions: number | null;

  @Column("tinyint", {
    name: "manage_self_active",
    width: 1,
    default: () => "'0'",
  })
  manageSelfActive: boolean;

  @Column("tinyint", {
    name: "manage_admins_active",
    width: 1,
    default: () => "'0'",
  })
  manageAdminsActive: boolean;

  @Column("tinyint", {
    name: "manage_member_cards",
    unsigned: true,
    default: () => "'0'",
  })
  manageMemberCards: number;

  @Column("tinyint", {
    name: "manage_mobile_codes",
    unsigned: true,
    default: () => "'0'",
  })
  manageMobileCodes: number;

  @Column("tinyint", {
    name: "manage_special_mail",
    width: 1,
    default: () => "'0'",
  })
  manageSpecialMail: boolean;

  @Column("int", {
    name: "manage_faq",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  manageFaq: number | null;

  @Column("tinyint", {
    name: "manage_fraud",
    nullable: true,
    default: () => "'0'",
  })
  manageFraud: number | null;

  @Column("int", {
    name: "manage_agencies",
    nullable: true,
    default: () => "'0'",
  })
  manageAgencies: number | null;

  @Column("tinyint", { name: "manage_passports", default: () => "'0'" })
  managePassports: number;
}
