import { EntityRepository } from 'typeorm';
import { PrimaryRepo } from '../primary.repo';
import { MemberEntity } from '@libs/entities/primary';

@EntityRepository(MemberEntity)
export class MemberRepo extends PrimaryRepo<MemberEntity> {}
