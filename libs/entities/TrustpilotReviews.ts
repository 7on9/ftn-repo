import { Column, Entity, Index } from "typeorm";

@Index("review_trustpilot_id", ["reviewTrustpilotId"], { unique: true })
@Index("review_id", ["reviewId"], {})
@Entity("trustpilot_reviews", { schema: "ftn_db_main" })
export class TrustpilotReviews {
  @Column("int", { name: "review_id", nullable: true, default: () => "'0'" })
  reviewId: number | null;

  @Column("varchar", { name: "review_trustpilot_id", length: 50 })
  reviewTrustpilotId: string;

  @Column("int", {
    name: "review_created_at",
    nullable: true,
    default: () => "'0'",
  })
  reviewCreatedAt: number | null;

  @Column("text", { name: "review_language", nullable: true })
  reviewLanguage: string | null;

  @Column("text", { name: "review_title", nullable: true })
  reviewTitle: string | null;

  @Column("longtext", { name: "review_text", nullable: true })
  reviewText: string | null;

  @Column("int", { name: "review_updated_at", nullable: true })
  reviewUpdatedAt: number | null;

  @Column("int", { name: "review_stars", nullable: true, default: () => "'0'" })
  reviewStars: number | null;

  @Column("text", { name: "review_writen_by", nullable: true })
  reviewWritenBy: string | null;

  @Column("text", { name: "review_company_reply", nullable: true })
  reviewCompanyReply: string | null;

  @Column("tinyint", {
    name: "review_is_verified",
    nullable: true,
    default: () => "'0'",
  })
  reviewIsVerified: number | null;

  @Column("int", {
    name: "review_number_of_likes",
    nullable: true,
    default: () => "'0'",
  })
  reviewNumberOfLikes: number | null;

  @Column("text", { name: "review_status", nullable: true })
  reviewStatus: string | null;

  @Column("text", { name: "review_report_data", nullable: true })
  reviewReportData: string | null;

  @Column("tinyint", {
    name: "review_counts_towards_trust_score",
    nullable: true,
  })
  reviewCountsTowardsTrustScore: number | null;

  @Column("text", { name: "review_links", nullable: true })
  reviewLinks: string | null;

  @Column("text", { name: "review_consumer", nullable: true })
  reviewConsumer: string | null;

  @Column("text", { name: "review_business_unit", nullable: true })
  reviewBusinessUnit: string | null;

  @Column("text", { name: "review_compliance_labels", nullable: true })
  reviewComplianceLabels: string | null;
}
