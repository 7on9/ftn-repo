import { BeforeInsert, Column, Entity, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PrimaryBaseEntity } from '@libs/entities/primary-base.entity';
import { NSMember } from '@libs/common/enums';

@Entity('member')
export class MemberEntity extends PrimaryBaseEntity {
  /**  */
  @Column({ type: 'uuid', nullable: true })
  partnerId: string;

  /** Username */
  @ApiProperty()
  @Column()
  @Index({ unique: true })
  username: string;

  /** Password */
  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty({ nullable: true })
  @Column({ default: NSMember.EAddressType.Home })
  addressType?: NSMember.EAddressType;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  personalId?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  frontPersonalIdCardUrl?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  backPersonalIdCardUrl?: string;

  @ApiPropertyOptional({
    description: 'Tax code if the customer is a business',
  })
  @Column({ nullable: true })
  taxCode?: string;

  @ApiPropertyOptional({
    description: 'Business license for business customers',
  })
  @Column({ nullable: true })
  businessLicense?: string;

  /** Email */
  @ApiPropertyOptional()
  @Column({ nullable: true })
  email?: string;

  /** Full name */
  @Column({
    nullable: true,
    type: 'varchar',
    length: 250,
  })
  fullName?: string;

  /** Address */
  @Column({
    nullable: true,
    type: 'text',
  })
  address?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  @Index()
  @Column({
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  phone?: string;

  @ApiPropertyOptional({
    description: 'Fax number if the customer is a business',
  })
  @Column({
    nullable: true,
    type: 'varchar',
    length: 250,
  })
  fax?: string;

  @ApiPropertyOptional({
    description: 'Representative if the customer is a business',
  })
  @Column({
    nullable: true,
    type: 'varchar',
    length: 250,
  })
  representative?: string;

  @ApiPropertyOptional({
    description: 'Position if the customer is a business',
  })
  @Column({
    nullable: true,
    type: 'varchar',
    length: 250,
  })
  position?: string;

  @ApiPropertyOptional({
    description: 'Department if the customer is a business',
  })
  @Column({
    nullable: true,
    type: 'varchar',
    length: 250,
  })
  dep?: string;

  @Index()
  @Column({ type: 'varchar', default: NSMember.EStatus.Active })
  status?: NSMember.EStatus;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  bankCode?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  bankBranch?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  bankAccountNumber?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  bankAccountName: string;

  @ApiPropertyOptional()
  @Index({ unique: true })
  @Column({ nullable: true })
  referralCode?: string;

  @ApiPropertyOptional({ description: 'ID of the referrer' })
  @Column({ type: 'uuid', nullable: true })
  referrerId?: string;

  @ApiPropertyOptional({ description: 'Whether this member is root or not' })
  @Column({ default: false })
  isRoot: boolean;

  @ApiPropertyOptional({ description: 'Member avatar URL' })
  @Column({ nullable: true })
  avatarUrl?: string;
}
