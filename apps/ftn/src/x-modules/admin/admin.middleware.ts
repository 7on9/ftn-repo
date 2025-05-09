import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: Request, res: Response, next: Function) {
    // console.log('--------AdminMiddleware-----------');
    try {
      // TODO VALIDATE TOKEN OR API KEY
      next();
    } catch (error) {
      next(new UnauthorizedException('Unauthorized'));
    }
  }
}
