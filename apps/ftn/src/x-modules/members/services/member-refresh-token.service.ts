import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { configEnv } from '@libs/@config/env';

@Injectable()
export class MemberRefreshTokenService {
  constructor(private jwtService: JwtService) {}

  async generateRefreshToken(
    authMemberId: string,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date,
  ) {
    const now = new Date();

    if (
      currentRefreshToken &&
      currentRefreshTokenExpiresAt &&
      now.getTime() > currentRefreshTokenExpiresAt.getTime()
    ) {
      throw new UnauthorizedException('Refresh token expired');
    }

    const { JWT_REFRESH_TOKEN_EXPIRY, JWT_REFRESH_TOKEN_SECRET } = configEnv();
    const newRefreshToken = this.jwtService.sign(
      { sub: authMemberId },
      {
        secret: JWT_REFRESH_TOKEN_SECRET,
        expiresIn: JWT_REFRESH_TOKEN_EXPIRY,
      },
    );

    return newRefreshToken;
  }
}
