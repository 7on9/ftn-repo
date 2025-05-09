import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class IntegrationMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: Request, res: Response, next: Function) {
    // console.log('--------IntegrationMiddleware-----------');
    try {
      next();
    } catch (error) {
      next(new UnauthorizedException('Unauthorized'));
    }
  }
}
