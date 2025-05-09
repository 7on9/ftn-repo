import { Injectable } from '@nestjs/common';
import { BindRepo, DefTransaction } from '@libs/@core/decorator';
import { BusinessException } from '@libs/@systems/exceptions';
import { UpdatePassword } from '~ftn/dto/member.dto';
import securityHelper from '@libs/@core/helpers/security.helper';
import { MemberRepo } from '@/repositories/primary';

@Injectable()
export class MemberService {
  constructor() {}

  @BindRepo(MemberRepo)
  private memberRepo: MemberRepo;

  @DefTransaction()
  async updateNewPassword(params: UpdatePassword) {
    const { memberId, newPassword, confirmPassword } = params;
    const check = await this.memberRepo.findOne({ where: { id: memberId } });
    if (!check) {
      throw new BusinessException(`Member id ${memberId} is not found`);
    }
    // Check if newPassword matches newPasswordConfirm
    if (newPassword !== confirmPassword) {
      throw new BusinessException('Password confirmation does not match');
    }
    const newPass = await securityHelper.hash(newPassword);
    return this.memberRepo.update({ id: memberId }, { password: newPass });
  }
}
