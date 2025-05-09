import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsUUID } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export class PrimaryBaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  @IsUUID(4)
  id?: string;

  @Index()
  @ApiProperty()
  @CreateDateColumn()
  createdDate?: Date;

  @Index()
  @ApiPropertyOptional()
  @UpdateDateColumn()
  updatedDate?: Date;

  @Index()
  @ApiPropertyOptional()
  @Column({ type: 'varchar', nullable: true })
  createdBy?: string | null;

  @Index()
  @ApiPropertyOptional()
  @Column({ type: 'varchar', nullable: true })
  updatedBy?: string | null;

  @Exclude()
  @VersionColumn({ default: 0 })
  version?: number;
}
