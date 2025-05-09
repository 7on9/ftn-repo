import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    // console.log('---------LoggerMiddleware----------');
    if (req.body) {
      //  console.log("[BODY] ", JSON.stringify(req.body));
    }
    if (req.params) {
      //  console.log("[PARAMS] ", JSON.stringify(req.params));
    }
    if (req.query) {
      //  console.log("[QUERY] ", JSON.stringify(req.query));
    }
    // console.log('-------------------');
    next();
  }
}
