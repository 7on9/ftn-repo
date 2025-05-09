import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';
import { PageRequest } from '@libs/@systems/utils';
import { NSMember } from '@libs/common/enums';
import dayjs from 'dayjs';

export class ListMemberReq extends PageRequest {
  @ApiPropertyOptional()
  username?: string;

  @ApiPropertyOptional({
    enum: NSMember.EMemberType,
    enumName: 'EMemberType',
  })
  memberType?: NSMember.EMemberType;

  @ApiPropertyOptional()
  personalId?: string;

  @ApiPropertyOptional()
  fullName?: string;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  phone?: string;

  @ApiPropertyOptional()
  address?: string;

  @ApiPropertyOptional()
  referralCode?: string;

  @ApiPropertyOptional({ enum: NSMember.EStatus })
  status?: NSMember.EStatus;

  @ApiPropertyOptional({
    description: 'Start date',
    example: dayjs().startOf('month').toISOString(),
  })
  startDate?: Date;

  @ApiPropertyOptional({ description: 'End date', example: dayjs().endOf('month').toISOString() })
  endDate?: Date;
}

export class UpdateMemberProfileReq {
  @ApiPropertyOptional()
  personalId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  frontPersonalIdCardUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  backPersonalIdCardUrl?: string;

  @ApiPropertyOptional({ description: 'Tax code if customer is a business' })
  taxCode?: string;

  @ApiPropertyOptional({ description: 'Fax if customer is a business' })
  fax?: string;

  @ApiPropertyOptional({ description: 'Department if customer is a business' })
  dep?: string;

  @ApiPropertyOptional({ description: 'Position if customer is a business' })
  position?: string;

  @ApiPropertyOptional({ description: 'Representative if customer is a business' })
  representative?: string;

  @ApiPropertyOptional({ description: 'Business license if customer is a business' })
  @IsOptional()
  @IsUrl()
  businessLicense?: string;

  /** Email */
  @ApiPropertyOptional()
  email?: string;

  /** Full Name */
  @ApiPropertyOptional()
  fullName?: string;

  /** Address */
  @ApiPropertyOptional()
  address?: string;

  @ApiPropertyOptional()
  provinceCode?: string;

  @ApiPropertyOptional()
  districtCode?: string;

  @ApiPropertyOptional()
  wardCode?: string;

  @ApiPropertyOptional({ description: 'Avatar url member' })
  @IsOptional()
  avatarUrl?: string;
}

export class UpdateAvatarReq {
  @ApiPropertyOptional({ description: 'Profile avatar' })
  @IsNotEmpty()
  @IsUrl()
  avatarUrl?: string;
}

export class UpdateMemberBankReq {
  @ApiPropertyOptional({ description: 'Bank code' })
  bankCode?: string;

  @ApiPropertyOptional({ description: 'Bank branch' })
  bankBranch?: string;

  @ApiPropertyOptional({ description: 'Bank account number' })
  bankAccountNumber?: string;

  @ApiPropertyOptional({ description: 'Bank account name' })
  bankAccountName?: string;
}

export class Collaborator {
  @ApiProperty()
  phone: string;

  @ApiPropertyOptional()
  username?: string;
}

export class Member {
  @ApiProperty()
  memberType: NSMember.EMemberType;

  @ApiProperty()
  membershipType: NSMember.EMembershipType;

  @ApiProperty()
  status: NSMember.EStatus;
}


export class ChangePasswordReq {
  @ApiPropertyOptional({ description: 'Old password' })
  oldPassword?: string;

  @ApiProperty({ description: 'New password' })
  @IsNotEmpty()
  newPassword: string;

  @ApiProperty({ description: 'Confirm new password' })
  @IsNotEmpty()
  newPasswordConfirm: string;
}

export class ResetPasswordReq extends ChangePasswordReq {
  @ApiProperty({ description: 'OTP code' })
  otpCode: string;
  @ApiProperty({ description: 'User ID' })
  userId: string;
}

export class UpdatePassword {
  @ApiProperty({ description: 'Member ID' })
  @IsUUID()
  memberId: string;

  @ApiProperty({ description: 'New password' })
  @IsNotEmpty()
  @IsString()
  newPassword: string;

  @ApiProperty({ description: 'Confirm new password' })
  @IsNotEmpty()
  @IsString()
  confirmPassword: string;
}