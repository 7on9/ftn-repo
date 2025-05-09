import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserPermissionGroupDto {
  @ApiProperty({
    description: 'User ID',
  })
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: 'Permission group ID',
  })
  @IsNotEmpty()
  permissionGroupId: string;
}

export class UpdateUserPermissionGroupDto {
  @ApiProperty({
    description: 'User permission group ID',
  })
  @IsNotEmpty()
  id: string;

  @ApiPropertyOptional({
    description: 'Active status of the permission group',
    example: true,
    default: true,
  })
  isActive?: boolean;
}

export class UserPermissionGroupDto {
  @ApiProperty({
    description: 'User permission group ID',
  })
  id: string;

  @ApiProperty({
    description: 'User ID',
  })
  userId: string;

  @ApiProperty({
    description: 'Permission group ID',
  })
  permissionGroupId: string;

  @ApiProperty({
    description: 'Active status of the permission group',
    example: true,
    default: true,
  })
  isActive: boolean;
}
export class UserPermissionGroupChangeStatusDto {
  @ApiProperty({
    description: 'User permission group ID',
  })
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Active status of the permission group',
    example: true,
  })
  isActive: boolean;
}
export class ListUserPermissionGroupReq {
  @ApiProperty({
    description: 'User permission group ID',
  })
  @IsNotEmpty()
  @IsUUID('4')
  id: string;
}
